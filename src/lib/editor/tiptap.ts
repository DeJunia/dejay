import { JSONContent } from "@tiptap/react";

export function getFirstTextBlock(
  content: JSONContent[],
  type: "heading" | "paragraph" = "paragraph"
): string {
  const node = content.find((node) => node.type === type);

  if (!node || !node.content) return "";

  return node.content
    .map((child) => ("text" in child ? child.text : ""))
    .join("");
}

interface ExtractOptions {
  maxChars?: number;
  maxBlocks?: number;
  allowedTypes?: string[];
}

export function extractTextPreview(
  content: JSONContent[],
  {
    maxChars = 180,
    maxBlocks = 3,
    allowedTypes = ["heading", "paragraph"],
  }: ExtractOptions = {}
): string {
  let text = "";
  let blocks = 0;

  for (const node of content) {
    if (!allowedTypes.includes(node.type || "")) continue;
    if (!node.content) continue;

    const blockText = node.content
      .map((child) => ("text" in child ? child.text : ""))
      .join("")
      .trim();

    if (!blockText) continue;

    text += (text ? " " : "") + blockText;
    blocks++;

    if (blocks >= maxBlocks || text.length >= maxChars) break;
  }

  return text.slice(0, maxChars);
}
