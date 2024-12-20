module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("./images/");
  eleventyConfig.addPassthroughCopy({ "./_temp/index.css": "./index.css" });
  eleventyConfig.addPassthroughCopy({ "./_temp/main.js": "./main.js" });
  eleventyConfig.addPassthroughCopy({ "./_temp/messages.js": "./messages.js" });
  eleventyConfig.addPassthroughCopy({ "./assets/fonts/*": "./" });
  eleventyConfig.addPassthroughCopy({ "./assets/favicons/*": "./" });
  eleventyConfig.addPassthroughCopy({ "./assets/docs/*": "./docs/" });
  eleventyConfig.addPassthroughCopy({ "./pages/record/": "./record/" });
};
