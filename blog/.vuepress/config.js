module.exports = {
  title: "AfternoonTea",
  description: "Like an Afternoon Tea",
  theme: "@vuepress/theme-blog", // OR shortcut: @vuepress/blog,
  base: "/afternoonTea/",
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions;
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: "Blog",
        link: "/",
      },
      {
        text: "Tags",
        link: "/tag/",
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/zaiyou12",
        },
      ],
      copyright: [
        {
          text: "Copyright © 2020. Aaron So. All rights reserved.",
          link: "",
        },
      ],
    },
  },
  markdown: {
    lineNumbers: true,
    plugins: {
      "markdown-it-bar": {},
    },
  },
  locales: {
    "/": {
      lang: "ko_KR",
      title: "AfternoonTea",
      description: "Like an Afternoon Tea",
    },
  },
  head: [
    ["link", { rel: "icon", type: "image/png", href: "/img/favicon.png" }],
  ],
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
};
