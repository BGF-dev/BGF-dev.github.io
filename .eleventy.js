module.exports = function(eleventyConfig) {
  // Output directory: _site

  // Copy `/static/` to `_site/static`
  eleventyConfig.addPassthroughCopy("static");
  
  // Copy `css/fonts/` to `_site/css/fonts`
  // If you use a subdirectory, it’ll copy using the same directory structure.
  //eleventyConfig.addPassthroughCopy("css/fonts");
  return {
    dir: {
      'output': '../BGF-build'
    }
  };
};