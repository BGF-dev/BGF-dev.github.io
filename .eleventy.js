const buildDirectory = '../BGF-build';
const eleventyPluginFilesMinifier = require("@sherby/eleventy-plugin-files-minifier");

module.exports = function(eleventyConfig) {
  // Copy `/static/` to buildDirectory + `/static`
  eleventyConfig.addPassthroughCopy("static");
  //eleventyConfig.addPlugin(eleventyPluginFilesMinifier);

  eleventyConfig.addShortcode('renderlayoutblock', (name, locale=null) => {
        return (this.layoutblock || {})[name + '__' + locale + '__'];
  });
  eleventyConfig.addPairedShortcode('layoutblock', (content, name, locale=null) => {
    if (!this.layoutblock) this.layoutblock = {};
    this.layoutblock[name + '__' + locale + '__'] = content;
  });
  
  return {
    dir: {
      'output': buildDirectory
    }
  };
};