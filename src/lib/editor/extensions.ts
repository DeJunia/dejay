import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import CharacterCount from "@tiptap/extension-character-count";
import Color from "@tiptap/extension-color";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Highlight from "@tiptap/extension-highlight";
import { TextStyle } from "@tiptap/extension-text-style";
import { TwoColumns } from "./twoColumns";
import { ColumnLeft, ColumnRight } from "./columns";
import {
  EditorContent as RichTextEditorContent,
  useEditor as useRichEditor,
} from "@tiptap/react";

export const useEditor = useRichEditor;
export const EditorContent = RichTextEditorContent;

export const extensions = [
  StarterKit.configure({
    heading: {
      levels: [1, 2, 3],
    },
    bulletList: {
      HTMLAttributes: {
        class: "list-disc pl-4",
      },
    },
    orderedList: {
      HTMLAttributes: {
        class: "list-decimal pl-4",
      },
    },
    blockquote: {
      HTMLAttributes: {
        class: "border-l-4 border-gray-300 pl-4",
      },
    },
  }),
  Underline,
  TextAlign.configure({
    types: ["heading", "paragraph"],
    alignments: ["left", "center", "right", "justify"],
  }),
  CharacterCount,
  TextStyle,
  Color.configure({
    types: ["textStyle"],
  }),
  Image.configure({
    inline: false,
    allowBase64: false,
    HTMLAttributes: {
      class: "rounded-lg max-w-full h-auto",
    },
  }),

  Link.configure({
    openOnClick: false,
    HTMLAttributes: {
      class: "text-blue-500 underline",
    },
  }),
  Highlight.configure({
    multicolor: true,
    HTMLAttributes: {
      class: "bg-yellow-200 rounded px-1",
    },
  }),
  TwoColumns,
  ColumnLeft,
  ColumnRight,
];
