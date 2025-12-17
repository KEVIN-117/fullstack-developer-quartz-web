import { QuartzTransformerPlugin } from "../types"
import { Root } from "mdast"
import { toHtml } from "hast-util-to-html"
import { Element } from "hast"

export const Banner: QuartzTransformerPlugin = () => ({
  name: "Banner",
  htmlPlugins() {
    return [
      () => (tree: Root, file) => {
        const fm = file.data.frontmatter
        if (fm && fm.banner) {
          // Crea un div para el banner
          const bannerElement: Element = {
            type: "element",
            tagName: "div",
            properties: {
              className: ["page-banner"],
              style: `background-image: url('${fm.banner}'); background-position: center ${fm.banner_y || "50%"}; background-size: cover;`,
            },
            children: [], // Vacío, solo background
          }

          // Convierte a HTML node y agrega al inicio del contenido
          const bannerHtml: any = {
            type: "html",
            value: toHtml(bannerElement),
          }

          // Inserta al principio del tree
          tree.children.unshift(bannerHtml)
        }
      },
    ]
  },
})
