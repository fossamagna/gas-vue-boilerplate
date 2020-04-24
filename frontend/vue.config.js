const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");
const svgToMiniDataURI = require("mini-svg-data-uri");

module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      const options = args[0];
      options.inlineSource = ".(js|css)$";
      if (!options.minify) {
        options.minify = {};
      }
      options.minify.removeAttributeQuotes = false;
      options.minify.removeScriptTypeAttributes = false;
      return args;
    });

    config.plugins.delete("preload");

    config.module
      .rule("images")
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use("url-loader")
      .loader("url-loader")
      .options({
        limit: 8192
      });

    const svgRule = config.module.rule("svg");

    // clear all existing loaders.
    // if you don't do this, the loader below will be appended to
    // existing loaders of the rule.
    svgRule.uses.clear();

    // add replacement loader(s)
    svgRule
      .use("url-loader")
      .loader("url-loader")
      .options({
        generator: content => svgToMiniDataURI(content.toString())
      });
  },
  configureWebpack: {
    plugins: [new HtmlWebpackInlineSourcePlugin()]
  },
  transpileDependencies: ["vuetify"]
};
