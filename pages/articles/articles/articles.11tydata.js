module.exports = {
  tags: "article",
  layout: "article",
  eleventyComputed: {
    permalink: (data) => {
      return `${data.page.fileSlug}.html`;
    },
  },
};
