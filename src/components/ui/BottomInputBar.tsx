"use client";
import { Category, Lesson } from "@/types/type";
import { useCategories } from "@/hooks/useCategory";

import { useEffect, useRef, useState } from "react";

interface PropType {
  form: Lesson;
  setForm: (form: Lesson) => void;
  handleChange: (field: keyof Lesson, value: string) => void;
}

export default function BottomInputBar({
  form,
  setForm,
  handleChange,
}: PropType) {
  const { data } = useCategories(100, 1);
  const categories = (data?.data as Category[]) ?? [];
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const titleRef = useRef<HTMLInputElement>(null);
  const readTimeRef = useRef<HTMLInputElement>(null);

  const toggleCategories = async () => {
    // Close mobile keyboard
    readTimeRef.current?.blur();
    titleRef.current?.blur();

    setOpen((prev) => !prev);
  };

  const selectCategory = (cat: Category) => {
    setSelectedCategory(cat);
    setOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="md:hidden fixed inset-0 bg-black/30 z-40 w-full"
        />
      )}

      {/* Popover */}
      <div
        className={`md:hidden fixed left-3 right-3 z-50 bg-white rounded-2xl shadow-xl
        transition-all duration-300 ease-out 
        ${
          open
            ? "bottom-20 opacity-100 translate-y-0"
            : "-bottom-full opacity-0 translate-y-4"
        }`}
      >
        <div className="px-4 py-3 font-semibold border-b border-gray-200">
          Select Category
        </div>

        {loading ? (
          <div className="p-6 text-center text-sm text-gray-500">
            Loading...
          </div>
        ) : (
          <div className="max-h-[50vh] overflow-y-auto">
            {categories.map((cat) => (
              <button
                key={cat._id}
                onClick={() => {
                  if (!cat._id) return;

                  setForm((prev: Lesson) => ({
                    ...prev,
                    categoryId: cat._id,
                  }));

                  selectCategory(cat);
                }}
                className="w-full text-left px-4 py-3 text-sm hover:bg-gray-100"
              >
                {cat.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Bar */}
      <div
        className="md:hidden fixed left-0 right-0 bottom-[env(safe-area-inset-bottom)]
        z-50 bg-white shadow-[0_-8px_24px_rgba(0,0,0,0.08)]
        px-3 py-2 flex items-center gap-2 p-4 w-full"
      >
        {/* Read Time */}
        <input
          ref={readTimeRef}
          type="number"
          placeholder="5"
          value={form.readingTime}
          onChange={(e) => handleChange("readingTime", e.target.value)}
          className="w-10 h-10 rounded-full border-2 border-gray-200 bg-gray-100
          text-center font-semibold text-sm focus:outline-none"
        />

        {/* Title */}
        <input
          ref={titleRef}
          type="text"
          placeholder="Enter title"
          value={form.title}
          onChange={(e) => handleChange("title", e.target.value)}
          className="flex-1 h-10 rounded-full border-2 border-gray-200 bg-gray-100
          px-4 text-sm focus:outline-none"
        />

        {/* Category Button */}
        <button
          onClick={toggleCategories}
          className="h-10 px-4 rounded-full border-2 border-green-500 bg-green-500
          text-sm font-medium whitespace-nowrap max-w-[100px] "
        >
          <p className="line-clamp-1 text-xs">
            {selectedCategory ? selectedCategory.name : "Categories"}
          </p>
        </button>
      </div>
    </>
  );
}
