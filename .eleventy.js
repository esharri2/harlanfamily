const addPlugins = require("./config/plugins");
const addShortCodes = require("./config/shortcodes");
const addPassThroughCopies = require("./config/passthroughs");
const addTransforms = require("./config/transforms");
const addFilters = require("./config/filters");


module.exports = function (eleventyConfig) {
  const { Liquid } = require("liquidjs");
  eleventyConfig.setLibrary(
    "liquid",
    new Liquid({
      root: "../_includes",
      extname: ".liquid",
      strictFilters: true,
    })
  );

  addPlugins(eleventyConfig);
  addPassThroughCopies(eleventyConfig);
  addShortCodes(eleventyConfig);
  addTransforms(eleventyConfig);
  addFilters(eleventyConfig);
  eleventyConfig.addWatchTarget("./_temp/");
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
    strict_filters: true,
  });
  eleventyConfig.setUseGitIgnore(false);
  return {
    dir: {
      data: "../_data",
      includes: "../_includes",
      layouts: "../_layouts",
      input: "./pages",
    },
  };
};
