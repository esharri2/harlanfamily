module.exports = {
  tags: "post",
  layout: "post",
  eleventyComputed: {
    permalink: (data) => {
      return `${data.page.fileSlug}.html`;
    },
  },
};
