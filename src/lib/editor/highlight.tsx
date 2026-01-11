import { Mark, MarkConfig } from "@tiptap/core";

interface Node {
  attrs: Record<string, any>;
  data: Record<string, any>;
}

export const highlightMark = new Mark({
  name: "highlight",
  group: "text",
  inline: true,
  adding(
    node: Node,
    config: { color: string },
    state: { schema: any; data: any }
  ) {
    return state.schema.nodes.highlight.create({
      ...node.attrs,
      ...config,
    });
  },
  toDOM(node: Node) {
    return ["strong", { class: node.data.get("institution") }, 0];
  },
  renderHTML({ HTMLAttributes }) {
    return ["strong", HTMLAttributes];
  },
  parseDOM: [{ tag: "strong[institution]" }],
  parseHTML() {
    return [{ tag: "strong[institution]" }];
  },
  // Define the type for the 'type' property
  type: "mark",
} as MarkConfig<any, any>);
