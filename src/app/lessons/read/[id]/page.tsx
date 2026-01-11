"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { useReadLesson } from "@/hooks/useLesson";
import { Spinner } from "@/components/ui/spinner";
import ReadLesson from "@/components/editor/ReadLesson";

const LessonViewerPage = () => {
  const { id } = useParams();
  const lessonId = (id as string) || "";
  const { data, isLoading } = useReadLesson(lessonId);

  const Lesson = data?.data;

  useEffect(() => {
    console.log("Lesson: ", Lesson);
  }, [Lesson]);

  if (isLoading)
    return (
      <div className="w-full h-svh flex justify-center items-center">
        <Spinner className="size-7 text-green-500" />
      </div>
    );

  return (
    <main className="w-full">
      <ReadLesson content={Lesson?.content ?? { type: "doc", content: [] }} />
    </main>
  );
};

export default LessonViewerPage;
