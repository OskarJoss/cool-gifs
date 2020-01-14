import browsersync from "rollup-plugin-browsersync";

module.exports = {
  input: "src/scripts/index.js",
  output: {
    file: "public/giphy.js",
    format: "iife"
  },
  plugins: [browsersync({ server: "public" })]
};
