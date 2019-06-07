const path = require("path");
const ManifestPlugin = require("webpack-manifest-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const whitelister = require("purgecss-whitelister");
const glob = require("glob-all");
const FileManagerPlugin = require("filemanager-webpack-plugin");

modern = process.env.VUE_CLI_MODERN_MODE;
production = process.env.NODE_ENV === "production";

config = {
  protocol: "http",
  host: "localhost",
  port: 8080,
  watchDir: "templates",
  // Whitelist selectors to stop purgecss from removing them from your CSS
  // You can pass in whole stylesheets to whitelist everything from thirdparty libs
  // Accepts string paths, array of strings, globby strings, or array of globby strings:
  // ['./node_modules/lib1/*.css', './node_modules/lib2/*.scss']
  purgecssWhitelist: [],
  // Whitelist based on a regular expression.
  // Ex: [/red$/] (selectors ending in 'red' will remain)
  // https://www.purgecss.com/whitelisting
  purgecssWhitelistPatterns: [],
};

// Custom PurgeCSS extractor for Tailwind that allows special characters in
// class names.
// https://github.com/FullHuman/purgecss#extractor
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g) || [];
  }
}

module.exports = {
  runtimeCompiler: true,
  publicPath: `${config.protocol}://${config.host}:${config.port}/`,
  outputDir: "web/dist",
  filenameHashing: true,
  css: {
    sourceMap: true,
  },
  devServer: {
    https: config.https,
    host: config.host,
    port: config.port,
    clientLogLevel: "info",
    headers: { "Access-Control-Allow-Origin": "*" },
    disableHostCheck: true,
    contentBase: path.join(__dirname, config.watchDir),
    watchContentBase: true,
  },
  configureWebpack: {
    plugins: [
      new ManifestPlugin({
        fileName: modern ? "manifest.json" : "manifest-legacy.json",
        publicPath: production ? "/dist/" : "/",
      }),
      new PurgecssPlugin({
        paths: glob.sync([
          path.join(__dirname, "./templates/**/*.html"),
          path.join(__dirname, "./templates/**/*.twig"),
          path.join(__dirname, "./src/**/*.vue"),
          path.join(__dirname, "./src/**/*.js"),
        ]),
        whitelist: whitelister(config.purgecssWhitelist),
        whitelistPatterns: config.purgecssWhitelistPatterns,
        extractors: [
          {
            extractor: TailwindExtractor,
            // Specify the file extensions to include when scanning for class names.
            extensions: ["html", "js", "twig", "vue"],
          },
        ],
      }),
      new FileManagerPlugin({
        onEnd: {
          // Delete unnecessary index.html file
          delete: ["./web/dist/index.html"],
        },
      }),
    ],
  },
};
