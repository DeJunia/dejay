"use client";
import React, { useCallback, useEffect } from "react";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  ArrowLeft,
  Undo2,
  Redo2,
  Heading1,
  Heading2,
  Pilcrow,
  Heading3,
  ChevronsDown,
  ImageIcon,
  Minus,
  Quote,
  Strikethrough,
  Columns2,
  Highlighter,
  Palette,
  CopyX,
} from "lucide-react";
import type { Editor } from "@tiptap/react";
import { useEditorState } from "@tiptap/react";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { useRouter } from "next/navigation";
import { UnderlineFormField, SelectInput } from "../ui/FormField";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/buttonC";
import { cn } from "@/utils/cn";
import { Lesson, Category } from "@/types/type";
import { useCategories } from "@/hooks/useCategory";
import { Spinner } from "../ui/spinner";

interface EditorToolbarProps {
  editor: Editor | null;
  onImageUpload?: () => void;
  setForm?: (form: Lesson) => void;
  handleChange?: (field: keyof Lesson, value: string) => void;
  form?: Lesson;
  handleSubmit?: () => void;
  isLoading?: boolean;
}

const TEXT_COLORS = [
  // Base
  { name: "Default", value: null },

  // Greens (brand core)
  { name: "Dark Green", value: "hsl(142, 72%, 29%)" },
  { name: "Tailwind Green", value: "hsl(142, 71%, 45%)" },
  { name: "Soft Green", value: "hsl(142, 69%, 58%)" },
  { name: "Muted Green", value: "hsl(143, 30%, 45%)" },

  // Bridge color (NEW)
  { name: "Teal", value: "hsl(173, 80%, 40%)" },

  // Blues
  { name: "Primary Blue", value: "hsl(217, 91%, 50%)" },
  { name: "Blue", value: "hsl(217, 91%, 60%)" },

  // Accent warm colors
  { name: "Amber", value: "hsl(45, 93%, 47%)" },
  { name: "Orange", value: "hsl(38, 92%, 50%)" },
  { name: "Red", value: "hsl(0, 84%, 60%)" },

  // Neutrals (reading comfort)
  { name: "Dark Gray", value: "hsl(220, 15%, 25%)" },
  { name: "Gray", value: "hsl(220, 9%, 46%)" },
  { name: "Slate", value: "hsl(215, 20%, 55%)" }, // ✅ added
  { name: "Light Gray", value: "hsl(220, 14%, 70%)" },

  // Creative accent
  { name: "Purple", value: "hsl(270, 70%, 55%)" },
];

const Toolbar = ({
  editor,
  onImageUpload,
  setForm,
  handleSubmit,
  isLoading,
  form,
  handleChange,
}: EditorToolbarProps) => {
  const router = useRouter();

  interface EditorState {
    isBold: boolean;
    canBold: boolean;
    isItalic: boolean;
    canItalic: boolean;
    isUnderline: boolean;
    canUnderline: boolean;
    isHeading1: boolean;
    isHeading2: boolean;
    isHeading3: boolean;
    isStrikethrough: boolean;
    isParagraph: boolean;
    canHorizontalRule: boolean;
    isHorizontalRule: boolean;
    canParagraph: boolean;
    isHighlight: boolean;
    canHighlight: boolean;
    isBulletList: boolean;
    isOrderedList: boolean;
    isBlockquote: boolean;
    isTextLeft: boolean;
    isTextCenter: boolean;
    canStrike: boolean;
    isTextRight: boolean;
    isTextJustify: boolean;
    canUndo: boolean;
    isTwoColumns: boolean;
    canTwoColumns: boolean;
    canRedo: boolean;
  }

  const editorState = useEditorState<EditorState>({
    editor: editor!,
    selector: (ctx) => {
      const e = ctx.editor;
      if (!e)
        return {
          isBold: false,
          canBold: false,
          isItalic: false,
          canItalic: false,
          isUnderline: false,
          canUnderline: false,
          isHeading1: false,
          isHeading2: false,
          isHeading3: false,
          isBulletList: false,
          isParagraph: false,
          canParagraph: false,
          isHighlight: false,
          canHorizontalRule: false,
          isHorizontalRule: false,
          canHighlight: false,
          isOrderedList: false,
          isBlockquote: false,
          isStrikethrough: false,
          isTextLeft: false,
          isTextCenter: false,
          isTextRight: false,
          isTextJustify: false,
          canStrike: false,
          canUndo: false,
          canRedo: false,
          isTwoColumns: false,
          canTwoColumns: false,
        };

      return {
        isBold: e.isActive("bold"),
        canBold: e.can().toggleBold(),
        isItalic: e.isActive("italic"),
        canItalic: e.can().toggleItalic(),
        isUnderline: e.isActive("underline"),
        canUnderline: e.can().toggleUnderline(),
        canHorizontalRule: e.can().setHorizontalRule(),
        isHorizontalRule: e.isActive("horizontalRule"),
        isHeading1: e.isActive("heading", { level: 1 }),
        isHeading2: e.isActive("heading", { level: 2 }),
        isHeading3: e.isActive("heading", { level: 3 }),
        isBulletList: e.isActive("bulletList"),
        isOrderedList: e.isActive("orderedList"),
        isStrikethrough: e.isActive("strike"),
        isParagraph: e.isActive("paragraph"),
        canParagraph: e.can().setParagraph(),
        isHighlight: e.isActive("highlight"),
        canHighlight: e.can().toggleHighlight(),
        canStrike: e.can().toggleStrike(),
        isBlockquote: e.isActive("blockquote"),
        isTextLeft: e.isActive({ textAlign: "left" }),
        isTextCenter: e.isActive({ textAlign: "center" }),
        isTextRight: e.isActive({ textAlign: "right" }),
        isTextJustify: e.isActive({ textAlign: "justify" }),
        canUndo: e.can().undo(),
        canRedo: e.can().redo(),
        isTwoColumns: e.isActive("twoColumns"),
        canTwoColumns: e.can().setTwoColumns(),
      };
    },
  });

  const goBack = useCallback(() => router.back(), [router]);

  const ToolbarButton: React.FC<{
    onClick: () => void;
    isActive?: boolean;
    disabled?: boolean;
    style?: string;
    icon: React.ComponentType<{ className?: string }>;
    title?: string;
  }> = ({ onClick, isActive, disabled, style, icon: Icon, title }) => (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={onClick}
          disabled={disabled}
          className={`flex items-center shrink-0 justify-center rounded-md h-9 w-9 hover:bg-green-100 ${
            isActive
              ? "bg-green-500/20  text-green-700"
              : "text-gray-600 hover:text-gray-800"
          } ${style || ""}`}
          type="button"
        >
          <Icon className="h-4 w-4" />
        </button>
      </TooltipTrigger>
      <TooltipContent side="bottom">{title}</TooltipContent>
    </Tooltip>
  );

  const { data } = useCategories();
  const categories = (data?.data as Category[]) ?? [];

  useEffect(() => {
    console.log(categories);
  }, [categories]);

  const categoryOptions = categories.map((category) => ({
    label: category.name as string,
    value: category._id as string,
  }));

  if (!editor)
    return (
      <div className="w-full border-b bg-gray-50 p-2">
        <div className="animate-pulse flex space-x-2">
          <div className="h-9 w-9 bg-gray-200 rounded"></div>
          <div className="h-9 w-9 bg-gray-200 rounded"></div>
          <div className="h-9 w-9 bg-gray-200 rounded"></div>
        </div>
      </div>
    );

  return (
    <div>
      {/* Top bar */}
      <div className="w-full flex items-center p-2 gap-5 bg-gray-50">
        <div className="flex flex-row gap-2 items-center">
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={goBack}
                className="flex items-center justify-center rounded-md h-9 w-9 hover:bg-green-500/20"
                type="button"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="bottom">Back</TooltipContent>
          </Tooltip>

          <ToolbarButton
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editorState.canUndo}
            title="Undo"
            icon={Undo2}
            style="border-2 border-gray-300 hover:border-green-500"
          />
          <Separator orientation="vertical" className="h-7" />
          <ToolbarButton
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editorState.canRedo}
            title="Redo"
            icon={Redo2}
            style="border-2 border-gray-300 hover:border-green-500"
          />
          <Separator orientation="vertical" className="h-7" />
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                className="flex items-center justify-center rounded-md h-9 gap-1 hover:bg-green-500/20 border-2 border-green-500 px-2"
                type="button"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                <ChevronsDown className="h-4 w-4 text-green-500" />
                {isLoading ? (
                  <Spinner className="size-5 text-green-500" />
                ) : (
                  <span className="text-sm hidden md:block text-green-500">
                    Save
                  </span>
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent side="bottom">Save</TooltipContent>
          </Tooltip>
        </div>
        <div className="flex-1 gap-5 flex justify-center items-center">
          <UnderlineFormField
            value={form?.title || ""}
            style="h-10 text-sm"
            placeholder="Enter lesson title"
            handleInputChange={(e) => {
              if (form && handleChange) {
                handleChange("title", e.target.value);
              }
            }}
          />
          <div className="max-w-xs lg:max-w-sm w-full">
            <SelectInput
              options={categoryOptions}
              value={form?.categoryId || ""}
              name={form?.categoryId || ""}
              style="h-10 text-sm"
              placeholder="Select Category"
              onChange={(e) => {
                if (form && handleChange) {
                  handleChange("categoryId", e.target.value);
                }
              }}
            />
          </div>
          <div className="w-[100px]">
            <div
              className="group h-10 border-2 border-gray-200 rounded-lg p-1 
                  focus-within:border-green-500 transition"
            >
              <div className="bg-gray-100 flex items-center gap-1 h-full rounded-sm px-2">
                <input
                  type="number"
                  value={form?.readingTime}
                  max={3}
                  min={1}
                  onChange={(e) => {
                    if (form && handleChange) {
                      handleChange("readingTime", e.target.value);
                    }
                  }}
                  className="w-10 bg-transparent outline-none text-sm text-center"
                />
                <span className="text-xs text-gray-600">mins</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Editor toolbar */}
      <div className="p-2">
        <div className="border-2 border-gray-400 bg-white p-2 rounded-lg md:rounded-md flex flex-row flex-wrap gap-2 items-center">
          {/* Formatting buttons */}
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editorState.canBold}
            isActive={editorState.isBold}
            title="Bold"
            icon={Bold}
          />
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editorState.canItalic}
            isActive={editorState.isItalic}
            title="Italic"
            icon={Italic}
          />
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            disabled={!editorState.canUnderline}
            isActive={editorState.isUnderline}
            title="Underline"
            icon={Underline}
          />
          <ToolbarButton
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            disabled={!editorState.canHorizontalRule}
            isActive={editorState.isHorizontalRule}
            title="Hardbreak"
            icon={Minus}
          />

          <ToolbarButton
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={!editorState.canStrike}
            isActive={editorState.isStrikethrough}
            title="Strikethrough"
            icon={Strikethrough}
          />
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleHighlight().run()}
            disabled={!editorState.canHighlight}
            isActive={editorState.isHighlight}
            title="Highlight"
            icon={Highlighter}
          />

          <Separator orientation="vertical" className="h-7" />

          {/* Headings */}
          <ToolbarButton
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            isActive={editorState.isHeading1}
            title="Heading 1"
            icon={Heading1}
          />
          <ToolbarButton
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            isActive={editorState.isHeading2}
            title="Heading 2"
            icon={Heading2}
          />
          <ToolbarButton
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            isActive={editorState.isHeading3}
            title="Heading 3"
            icon={Heading3}
          />
          <ToolbarButton
            onClick={() => editor.chain().focus().setParagraph().run()}
            isActive={editorState.isParagraph}
            title="Paragraph"
            icon={Pilcrow}
          />

          <Separator orientation="vertical" className="h-7" />

          {/* Lists */}
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            isActive={editorState.isBulletList}
            title="Bullet List"
            icon={List}
          />
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            isActive={editorState.isOrderedList}
            title="Numbered List"
            icon={ListOrdered}
          />
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            isActive={editorState.isBlockquote}
            title="Blockquote"
            icon={Quote}
          />

          <Separator orientation="vertical" className="h-7" />

          {/* Text alignment */}
          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            isActive={editorState.isTextLeft}
            title="Left Align"
            icon={AlignLeft}
          />
          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            isActive={editorState.isTextCenter}
            title="Center Align"
            icon={AlignCenter}
          />
          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            isActive={editorState.isTextRight}
            title="Right Align"
            icon={AlignRight}
          />
          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign("justify").run()}
            isActive={editorState.isTextJustify}
            title="Justify Align"
            icon={AlignJustify}
          />

          <ToolbarButton
            onClick={() => {
              if (editorState.isTwoColumns) {
                editor.chain().focus().unsetTwoColumns().run();
              } else {
                editor.chain().focus().setTwoColumns().run();
              }
            }}
            isActive={editorState.isTwoColumns}
            disabled={!editorState.canTwoColumns}
            title={
              editorState.isTwoColumns ? "Remove Columns" : "Add Two Columns"
            }
            icon={Columns2}
            style="hover:border-green-50"
          />

          <Separator orientation="vertical" className="h-7" />

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="default"
                size="sm"
                className="h-8 w-8 p-0"
                title="Text Color"
              >
                <Palette className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-2">
              <div className="grid grid-cols-4 gap-2">
                {TEXT_COLORS.map((color) => (
                  <button
                    key={color.name}
                    className={cn(
                      "w-6 h-6 rounded  hover:scale-110 transition-transform",
                      !color.value && "bg-foreground"
                    )}
                    style={
                      color.value ? { backgroundColor: color.value } : undefined
                    }
                    onClick={() => {
                      if (color.value) {
                        editor.chain().focus().setColor(color.value).run();
                      } else {
                        editor.chain().focus().unsetColor().run();
                      }
                    }}
                    title={color.name}
                  />
                ))}
              </div>
            </PopoverContent>
          </Popover>
          <Separator orientation="vertical" className="h-7" />
          <ToolbarButton
            onClick={() => editor.commands.clearContent()}
            style="text-red-500 hover:text-red-500"
            title="Clear Content"
            icon={CopyX}
          />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
