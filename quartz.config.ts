import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Fullstack",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "es-ES",
    baseUrl: "https://kevin-117.github.io/fullstack-developer-quartz-web/", // URL (e.g., username.github.io/repo)
    ignorePatterns: [
      "private",
      "templates",
      ".obsidian",
      "node_modules",
      "*.md~",
      "*.backup",
      ".git",
      ".github",
      ".trash",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fefdfe", // base00
          lightgray: "#fbfafc", // base20
          gray: "#a9a6af", // base50
          darkgray: "#6c6776", // base70
          dark: "#18141f", // text_normal
          secondary: "#6f51f4", // blue-violet
          tertiary: "#3bb2ce", // cool-cyan light
          highlight: "#efeef188", // modifier_hover con opacidad approx
          textHighlight: "#9446f840", // mix violet 25% transparent approx
        },
        darkMode: {
          light: "#040109", // base00
          lightgray: "#0c031d", // base20
          gray: "#342a48", // base40
          darkgray: "#9189a1", // base70
          dark: "#efedf3", // text_normal
          secondary: "#6f51f4", // blue-violet
          tertiary: "#43cfea", // cool-cyan dark
          highlight: "#180e2e88", // modifier_hover con opacidad approx
          textHighlight: "#9446f888", // mix violet 25% transparent approx
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.Assets(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
