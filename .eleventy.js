import sub_plugin from "markdown-it-sub";
import anchor from "markdown-it-anchor";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/*.png");
  eleventyConfig.addPassthroughCopy("src/style.css");

  eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(sub_plugin));
  eleventyConfig.amendLibrary("md", (mdLib) =>
    mdLib.use(anchor, { level: [1, 2] })
  );

  return {
    dir: {
      input: "src",
    },
  };
}
