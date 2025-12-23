import sub_plugin from "markdown-it-sub";
import anchor from "markdown-it-anchor";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/*.png");
  eleventyConfig.addPassthroughCopy("src/style.css");

  eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(sub_plugin));
  eleventyConfig.amendLibrary("md", (mdLib) =>
    mdLib.use(anchor, { level: [1, 2] })
  );

  eleventyConfig.addShortcode("ref", function (url) {
    if (!url) {
      throw new Error("URL is required for ref shortcode");
    }
    return `<a href="${url}" class="ref" target="_blank">↩</a>`;
  });

  return {
    dir: {
      input: "src",
    },
  };
}
