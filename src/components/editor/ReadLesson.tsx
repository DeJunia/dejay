"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import { extensions } from "@/lib/editor/extensions";
import { LessonContent } from "@/types/type";
import "./editor-styles.css";

const EMPTY_DOC: LessonContent = {
  type: "doc",
  content: [],
};

const ReadLesson = ({ content }: { content?: LessonContent }) => {
  const editor = useEditor(
    {
      extensions,
      content: content ?? EMPTY_DOC,
      editable: false,
      immediatelyRender: false, // ✅ SSR-safe
    },
    [content]
  );

  if (!editor) return null;

  return (
    <article className="w-full max-w-4xl mx-auto px-4 bg-transparent">
      <EditorContent
        editor={editor}
        className="prose prose-lg max-w-none bg-transparent focus:outline-none"
      />
    </article>
  );
};

export default ReadLesson;
