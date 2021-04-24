const buildDirectory = '../BGF-build';
const eleventyPluginFilesMinifier = require("@sherby/eleventy-plugin-files-minifier");

module.exports = function(eleventyConfig) {
  // Copy `/static/` to buildDirectory + `/static`
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addPlugin(eleventyPluginFilesMinifier);

  eleventyConfig.addShortcode('renderlayoutblock', (name) => {
        return (this.layoutblock || {})[name];
  });
  eleventyConfig.addPairedShortcode('layoutblock', (content, name) => {
    if (!this.layoutblock) this.layoutblock = {};
    this.layoutblock[name] = content;
  });
  
  return {
    dir: {
      'output': buildDirectory
    }
  };
};