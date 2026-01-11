"use client";
import React, { useEffect, useState, useRef } from "react";
import Toolbar from "./Toolbar";

import { extensions } from "@/lib/editor/extensions";
import type { LessonContent } from "@/types/type";
import ToolbarSm from "./ToolBarSm";
import "./editor-styles.css";
import BottomSection from "./bottomSection";
import { Lesson } from "@/types/type";
import { EditorContent, useEditor } from "@tiptap/react";

interface LessonEditorProps {
  content?: LessonContent;
  form?: Lesson;
  onChange?: (content: LessonContent) => void;
  marginMode?: "normal" | "wide";
  placeholder?: string;
  readOnly?: boolean;
  setForm?: (form: Lesson) => void;
  handleChange?: (field: keyof Lesson, value: string) => void;
  handleSubmit?: () => void;
  isLoading?: boolean;
}

const RichTextEditor = ({
  content,
  form,
  setForm,
  onChange,
  handleChange,
  handleSubmit,
  isLoading,
  marginMode,
  placeholder = "Start typing your content here...",
  readOnly,
}: LessonEditorProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(false);
  const editorContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const editor = useEditor({
    extensions: extensions,
    content: content || {
      type: "doc",
      content: [],
    },
    editable: !readOnly,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      if (onChange) {
        const json = editor.getJSON();
        onChange({
          type: "doc",
          content: json.content || [],
        });
      }
    },
    onCreate: ({ editor }) => {
      // Check if editor is empty
      const text = editor.getText().trim();
      const json = editor.getJSON();
      const hasContent =
        text.length > 0 ||
        (json.content &&
          json.content.length > 0 &&
          json.content.some(
            (node: any) => node.content && node.content.length > 0
          ));

      setShowPlaceholder(!hasContent);
    },
  });

  // Handle click on placeholder to focus editor
  const handlePlaceholderClick = () => {
    if (editor && !readOnly) {
      editor.commands.focus();
      setShowPlaceholder(false);
    }
  };

  // Handle editor focus to hide placeholder
  const handleEditorFocus = () => {
    setShowPlaceholder(false);
  };

  // Don't render editor on server
  if (!isMounted) {
    return (
      <div
        className={`h-svh flex flex-col border w-full mx-auto ${
          marginMode === "wide" ? "max-w-[1700px]" : "max-w-4xl"
        }`}
      >
        <div className="flex-shrink-0">
          {/* Toolbar loading skeleton */}
          <div className="p-2 border-b bg-gray-50">
            <div className="animate-pulse flex space-x-2">
              <div className="h-9 w-9 bg-gray-200 rounded"></div>
              <div className="h-9 w-9 bg-gray-200 rounded"></div>
              <div className="h-9 w-9 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
        <div className="flex-1 p-4">
          <div className="prose prose-lg max-w-none min-h-[500px] border rounded p-4">
            <p className="text-gray-500">Loading editor...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative h-svh flex flex-col border w-full mx-auto bg-gray-50 ${
        marginMode === "wide" ? "max-w-[1700px]" : "max-w-4xl"
      }`}
    >
      {/* Fixed Toolbar at the top */}
      <div className="flex-shrink-0 hidden md:block">
        <Toolbar
          editor={editor}
          form={form}
          setForm={setForm}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </div>
      <div className="block md:hidden flex-shrink-0">
        <ToolbarSm
          editor={editor}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </div>

      {/* Scrollable Content Area */}
      <div
        ref={editorContainerRef}
        className={`flex-1 overflow-y-auto mx-auto max-w-4xl w-full rounded-lg bg-white `}
      >
        <div className="p-4 min-h-full">
          <div className="relative">
            <div onFocus={handleEditorFocus}>
              <EditorContent
                editor={editor}
                className="prose prose-lg max-w-none focus:outline-none min-h-[calc(100vh-150px)]"
              />
            </div>
            {showPlaceholder && !readOnly && (
              <div
                className="absolute top-0 left-0 w-full h-full cursor-text"
                onClick={handlePlaceholderClick}
              >
                <div className="text-gray-400 p-4 pointer-events-none">
                  {placeholder}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full bg-green-50 hidden md:block">
        <div className="mx-auto max-w-7xl w-full flex justify-between items-center px-4 py-1 text-sm text-green-700">
          <div>
            <span className="text-xs">Dejay Driving School Notes</span>
          </div>
          <div>
            <span>
              {editor?.storage.characterCount.characters()} characters
            </span>
          </div>
        </div>
      </div>
      <BottomSection />
    </div>
  );
};

export default RichTextEditor;
