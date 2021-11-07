const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  mode: "production",
  entry: "./public/index.js",
  output: {
    path: __dirname + "/public/dist",
    filename: "bundle.js",
  },
  plugins: [
    new WebpackPwaManifest({
      fingerprints: false,
      inject: false,
      name: "Online/Offline Budget Tracker",
      short_name: "Budget tracker",
      description: "An on/off-line budget tracker",
      background_color: "#01579b",
      theme_color: "#ffffff",
      start_url: "/",
      icons: [
        {
          src: path.resolve("public/icons/icon-512x512.png"),
          sizes: [192, 512],
        },
      ],
    }),
  ],
};
module.exports = config;
