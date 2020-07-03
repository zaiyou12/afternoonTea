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
  },
};
