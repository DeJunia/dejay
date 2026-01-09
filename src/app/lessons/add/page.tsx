"use client";
import React, { useState } from "react";
import RichTextEditor from "@/components/editor/RichTextEditor";
import { LessonContent, LessonStatus, Lesson } from "@/types/type";
import { toast } from "sonner";
import { useParams } from "next/navigation";

const AddPage = () => {
  const { id } = useParams<{ id: string }>();
  const isEditing = id && id !== "new";
  const [form, setForm] = useState<Lesson>({
    title: "",
    content: {
      type: "doc",
      content: [],
    },
    categoryId: "",
    status: "draft",
    isTodaysLesson: false,
    scheduledDate: "",
    viewCount: 0,
    marginMode: "normal",
    createdAt: "",
    updatedAt: "",
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (field: keyof Lesson, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="w-full">
      <RichTextEditor
        marginMode="wide"
        form={form}
        setForm={setForm}
        handleChange={handleChange}
        onChange={(newContent) => {
          setForm((prev) => ({
            ...prev,
            content: newContent,
          }));
        }}
      />
    </div>
  );
};

export default AddPage;
