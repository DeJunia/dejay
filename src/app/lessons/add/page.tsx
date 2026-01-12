"use client";
import React, { useState } from "react";
import RichTextEditor from "@/components/editor/RichTextEditor";
import { LessonContent, LessonStatus, Lesson } from "@/types/type";
import { toast } from "sonner";
import { useParams } from "next/navigation";
import lessonService from "@/services/lessonService";
import { EditorContent } from "@/lib/editor/extensions";
import BottomInputBar from "@/components/ui/BottomInputBar";

const AddLesson = () => {
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
    readingTime: 1,
    scheduledDate: "",
    viewCount: 0,
    marginMode: "normal",
  });

  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field: keyof Lesson, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    if (!form.title || form.title.trim() === "") {
      toast.error("Title is required");
      setIsLoading(false);
      return;
    }

    if (!form.content || form.content.content.length === 0) {
      toast.error("Content is required, Write something");
      setIsLoading(false);
      return;
    }

    if (!form.categoryId || form.categoryId.trim() === "") {
      toast.error("Category is required, Select a category");
      setIsLoading(false);
      return;
    }
    try {
      const res = await lessonService.createLesson(form);
      if (res.success) {
        toast.success("Lesson created successfully");
        setForm({
          title: "",
          content: {
            type: "doc",
            content: [],
          },
          categoryId: "",
          status: "draft",
          isTodaysLesson: false,
          readingTime: 1,
          scheduledDate: "",
          viewCount: 0,
          marginMode: "normal",
        });
      }
    } catch (error) {
      toast.error("Error creating lesson, Try Again");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <RichTextEditor
        marginMode="wide"
        handleSubmit={handleSubmit}
        isLoading={isLoading}
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
      <BottomInputBar
        form={form}
        setForm={setForm}
        handleChange={handleChange}
      />
    </div>
  );
};

export default AddLesson;
