import { Node, mergeAttributes } from "@tiptap/core";

export const ColumnLeft = Node.create({
  name: "columnLeft",

  content: "block+",

  parseHTML() {
    return [
      {
        tag: 'div[data-type="column-left"]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      mergeAttributes(HTMLAttributes, {
        "data-type": "column-left",
        class: "column-left",
      }),
      0,
    ];
  },
});

export const ColumnRight = Node.create({
  name: "columnRight",

  content: "block+",

  parseHTML() {
    return [
      {
        tag: 'div[data-type="column-right"]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      mergeAttributes(HTMLAttributes, {
        "data-type": "column-right",
        class: "column-right",
      }),
      0,
    ];
  },
});
