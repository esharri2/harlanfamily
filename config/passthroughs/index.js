module.exports = (eleventyConfig) => {
  // eleventyConfig.addPassthroughCopy({ "./images/*": "./img/" });
  eleventyConfig.addPassthroughCopy({ "./_temp/index.css": "./index.css" });
  eleventyConfig.addPassthroughCopy({ "./_temp/main.js": "./main.js" });
  eleventyConfig.addPassthroughCopy({ "./assets/fonts/*": "./" });
  eleventyConfig.addPassthroughCopy({ "./assets/favicons/*": "./" });
};
