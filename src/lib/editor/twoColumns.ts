import { Node, mergeAttributes } from "@tiptap/core";

export interface TwoColumnsOptions {
  HTMLAttributes: Record<string, any>;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    twoColumns: {
      setTwoColumns: () => ReturnType;
      unsetTwoColumns: () => ReturnType;
    };
  }
}

export const TwoColumns = Node.create<TwoColumnsOptions>({
  name: "twoColumns",

  group: "block",

  content: "columnLeft columnRight",

  parseHTML() {
    return [
      {
        tag: 'div[data-type="two-columns"]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      mergeAttributes(HTMLAttributes, {
        "data-type": "two-columns",
        class: "two-columns-container",
      }),
      0,
    ];
  },

  addCommands() {
    return {
      setTwoColumns:
        () =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            content: [
              {
                type: "columnLeft",
                content: [
                  {
                    type: "paragraph",
                    content: [],
                  },
                ],
              },
              {
                type: "columnRight",
                content: [
                  {
                    type: "paragraph",
                    content: [],
                  },
                ],
              },
            ],
          });
        },
      unsetTwoColumns:
        () =>
        ({ commands }) => {
          return commands.lift(this.name);
        },
    };
  },
});
