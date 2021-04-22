const buildDirectory = '../BGF-build';

module.exports = function(eleventyConfig) {
  // Copy `/static/` to buildDirectory + `/static`
  eleventyConfig.addPassthroughCopy("static");
  
  return {
    dir: {
      'output': buildDirectory
    }
  };
};