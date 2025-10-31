const Image = require("@11ty/eleventy-img");

const image = (eleventyConfig) => {
  const formats =
    process.env.ELEVENTY_ENV === "production" ? ["jpeg"] : ["jpeg"];

  eleventyConfig.addShortcode(
    "image",
    async (
      src,
      alt = "",
      sizes = "80vw",
      widths = "400,600,800,1200",
      eager,
    ) => {
      const widthsArray = widths.split(",").map((width) => Number(width));
      let metadata = await Image(src, {
        widths: widthsArray,
        formats,
        outputDir: "./_site/img",
      });

      let imageAttributes = {
        alt,
        sizes,
        loading: eager ? "eager" : "lazy",
        decoding: "async",
      };

      // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
      return Image.generateHTML(metadata, imageAttributes);
    },
  );
};

module.exports = image;
