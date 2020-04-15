const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");

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
  },
  configureWebpack: {
    plugins: [new HtmlWebpackInlineSourcePlugin()]
  }
};
