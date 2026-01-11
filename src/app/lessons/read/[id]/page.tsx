"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { useReadLesson } from "@/hooks/useLesson";
import { Spinner } from "@/components/ui/spinner";
import ReadLesson from "@/components/editor/ReadLesson";
import LessonReadHeader from "@/components/LessonReadHeader";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock } from "lucide-react";

const LessonViewerPage = () => {
  const { id } = useParams();
  const lessonId = (id as string) || "";
  const { data, isLoading } = useReadLesson(lessonId);

  const Lesson = data?.data;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  useEffect(() => {
    console.log("Lesson: ", Lesson);
  }, [Lesson]);

  if (isLoading)
    return (
      <div className="w-full h-svh flex justify-center items-center">
        <LessonReadHeader />
        <Spinner className="size-7 text-green-500" />
      </div>
    );

  return (
    <main className="w-full pt-25 pb-10">
      <LessonReadHeader />
      <div className="px-5 mx-auto max-w-4xl">
        <div className="bg-green-100 px-5 py-2 rounded-full">
          <p>{Lesson?.categoryId?.name}</p>
        </div>

        <div className="border-b border-t border-gray-200 mt-5 py-3 px-3 flex flex-row gap-3 items-center">
          <div className="flex flex-row items-center gap-2">
            <div className="relative rounded-full size-8 flex items-center justify-center overflow-hidden">
              <div
                className="size-full"
                style={{
                  background: Lesson?.categoryId?.color ?? "#9ca3af",
                  opacity: 0.1,
                }}
              />
              <div
                className="absolute text-sm font-semibold"
                style={{ color: Lesson?.categoryId?.color ?? "#9ca3af" }}
              >
                {Lesson?.authorName?.slice(0, 1).toLocaleUpperCase() ?? "U"}
              </div>
            </div>
            <p className="text-sm text-gray-600">{Lesson?.authorName}</p>
          </div>

          <Separator className="h-6" orientation="vertical" />

          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5 text-gray-600">
              <Calendar className="h-3.5 w-3.5" />
              <span>
                {formatDate(Lesson?.createdAt ?? new Date().toISOString())}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-600">
              <Clock className="h-3.5 w-3.5" />
              <span>{Lesson?.readingTime ?? 0} min read</span>
            </div>
          </div>
        </div>
      </div>
      <ReadLesson content={Lesson?.content ?? { type: "doc", content: [] }} />
    </main>
  );
};

export default LessonViewerPage;
