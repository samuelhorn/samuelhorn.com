import { h } from "hastscript";

class CodeTransformer {
  private meta: any;
  private code: any;

  constructor() {
    this.meta = null;
    this.code = null;
  }

  transform() {
    return {
      name: "shiki-transformer-add-filename-and-copy-button",
      preprocess: (code: any, options: any) => {
        this.meta = options.meta;
        this.code = code;
        return code;
      },
      root: (root: any) => {
        const button = h(
          "button",
          {
            class: "astro-code-button",
            "data-code": this.code,
            onclick: `
              navigator.clipboard.writeText(this.dataset.code);
              this.classList.add('copied');
              setTimeout(() => this.classList.remove('copied'), 2000);
            `,
          },
          [
            h("span", { class: "copy" }, "copy"),
            h("span", { class: "done" }, "copied"),
          ]
        );

        const header = h("header", { className: ["astro-code-header"] }, [
          h(
            "div",
            {
              className: ["astro-code-header-dots"],
            },
            [
              h("span", {
                className: [
                  "w-3 h-3 rounded-full block bg-background border border-border",
                ],
              }),
              h("span", {
                className: [
                  "w-3 h-3 rounded-full block bg-background border border-border",
                ],
              }),
              h("span", {
                className: [
                  "w-3 h-3 rounded-full block bg-background border border-border",
                ],
              }),
            ]
          ),
          h("span", this.meta?.__raw || ""),
        ]);

        if (root.children) {
          root.children = root.children.map((node: any) => {
            if (node.type === "element" && node.tagName === "pre") {
              return h("section", { className: ["astro-code-wrapper"] }, [
                this.meta?.__raw && header,
                node,
                button,
              ]);
            }
            return node;
          });
        }
        return root;
      },
    };
  }
}

export const codeTransformer = () => new CodeTransformer().transform();
