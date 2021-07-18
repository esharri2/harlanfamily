module.exports = (eleventyConfig) => {
  require("./prettyDate")(eleventyConfig);
  require("./currentYear")(eleventyConfig);
  require("./markdown")(eleventyConfig);
  require("./image")(eleventyConfig);
};
