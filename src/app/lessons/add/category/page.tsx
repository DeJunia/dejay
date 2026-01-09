"use client";
import React, { useState } from "react";
import { Category } from "@/types/type";
import { toast } from "sonner";
import { Input, TextArea } from "@/components/ui/FormField";
import { useRouter } from "next/navigation";
import { MdOutlineCategory } from "react-icons/md";
import { Button } from "@/components/ui/Button";
import categoryService from "@/services/categoryService";

const COLORS = [
  "#22c55e", // green
  "#3b82f6", // blue
  "#ef4444", // red
  "#f59e0b", // amber
  "#8b5cf6", // purple
  "#ec4899", // pink
  "#14b8a6", // teal
  "#64748b", // gray
];

const CategoryPage = () => {
  const [error, setError] = useState<{ [key: string]: string }>({});
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<Category>({
    name: "",
    description: "",
    color: "",
  });

  const handleChange = (field: keyof Category, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const uploadToCloudinary = (file: File) => {
    return new Promise<{ url: string; name: string }>((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const formData = new FormData();

      formData.append("file", file);
      formData.append(
        "upload_preset",
        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
      );

      xhr.open(
        "POST",
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/raw/upload`
      );

      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          setUploadProgress(Math.round((event.loaded / event.total) * 100));
        }
      };

      xhr.onload = () => {
        setUploading(false);
        setUploadProgress(0);

        if (xhr.status === 200) {
          const res = JSON.parse(xhr.responseText);
          resolve({
            url: res.secure_url,
            name: file.name,
          });
        } else {
          console.error(xhr.responseText);
          reject("Upload failed");
        }
      };

      xhr.onerror = () => {
        setUploading(false);
        reject("Upload error");
      };

      setUploading(true);
      xhr.send(formData);
    });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!form.name) {
      newErrors.name = "Name is required";
    }

    if (!form.color) {
      newErrors.color = "Color is required";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await categoryService.createCategory(form);
      if (res.success) {
        toast.success("Category created successfully");
        setForm({
          name: "",
          description: "",
          color: "",
          pdfName: "",
          pdfUrl: "",
        });
        return;
      }
    } catch (error) {
      toast.error("Error creating category");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mx-auto max-w-5xl h-screen p-5 pb-10 pt-24">
      <div>
        <div className="w-full">
          <div className="flex flex-row items-center gap-3">
            <MdOutlineCategory className="text-lg md:text-xl" />
            <h1 className="text-xl md:text-2xl font-semibold">
              Add New Category
            </h1>
          </div>
        </div>

        <div className="w-full mx-auto max-w-2xl mt-4">
          <div className="mb-3">
            <Input
              value={form.name}
              handleChangeText={(e) => {
                handleChange("name", e.target.value);
              }}
              title="Name"
              placeholder="Category Name"
              type="text"
              isError={error && error.name ? true : false}
              max={50}
            />
            {error && error.name && (
              <p className="text-xs text-red-500 ml-3 mt-2">{error.name}</p>
            )}
          </div>
          <div className="mb-3">
            <TextArea
              value={form.description || ""}
              handleChangeText={(e) => {
                handleChange("description", e.target.value);
              }}
              title="Description"
              placeholder="Category Description"
              max={500}
            />
          </div>

          <div className="mb-3">
            <label className="text-gray-800 ml-4 text-sm mb-2 block">
              Category Color
            </label>

            <div
              className={`p-3 rounded-xl border-2 ${
                error.color ? "border-red-500" : "border-gray-200"
              }`}
            >
              <div className="flex items-center gap-3 flex-wrap">
                {COLORS.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => handleChange("color", color)}
                    className={`w-8 h-8 rounded-full border-2 transition-all
            ${
              form.color === color
                ? "border-black scale-110"
                : "border-transparent"
            }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {error.color && (
              <p className="text-xs text-red-500 ml-3 mt-2">{error.color}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="text-gray-800 ml-4 text-sm mb-2 block">
              Upload PDF
            </label>

            {/* Upload box */}
            <label
              htmlFor="pdf-upload"
              className={`mx-4 flex flex-col items-center justify-center gap-2
              h-28 rounded-xl border-2 border-dashed cursor-pointer transition
              ${
                uploading
                  ? "border-green-400 bg-green-50"
                  : "border-gray-300 hover:border-green-400 hover:bg-gray-50"
              }`}
            >
              <span className="text-sm text-gray-600">
                {form.pdfName ? "Change PDF" : "Click to upload PDF"}
              </span>
              <span className="text-xs text-gray-400">PDF files only</span>

              <input
                id="pdf-upload"
                type="file"
                accept="application/pdf"
                className="hidden"
                disabled={uploading}
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;

                  if (file.type !== "application/pdf") {
                    toast.error("Only PDF files are allowed");
                    return;
                  }

                  try {
                    const result = await uploadToCloudinary(file);

                    setForm((prev) => ({
                      ...prev,
                      pdfUrl: result.url,
                      pdfName: result.name,
                    }));

                    toast.success("PDF uploaded successfully");
                  } catch {
                    toast.error("PDF upload failed");
                  }
                }}
              />
            </label>

            {/* Progress bar */}
            {uploading && (
              <div className="mt-3 mx-4">
                <div className="w-full h-2 bg-gray-200 rounded">
                  <div
                    className="h-2 bg-green-500 rounded transition-all"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  Uploading... {uploadProgress}%
                </p>
              </div>
            )}

            {/* Uploaded file */}
            {form.pdfName && !uploading && (
              <div className="mt-2 mx-4 flex items-center gap-2 text-green-600">
                <span className="text-xs font-medium">Uploaded:</span>
                <span className="text-xs truncate">{form.pdfName}</span>
              </div>
            )}
          </div>
          <div className="mt-5">
            <Button
              onClick={() => {
                if (validateForm()) {
                  handleSubmit();
                }
              }}
              text="Register"
              style="w-full bg-green-500 px-5 py-2 text-sm text-white rounded-lg font-inter font-semibold flex items-center justify-center"
              loading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
