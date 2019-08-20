const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    components: path.resolve(__dirname, "src/components"),
    assets: path.resolve(__dirname, "src/assets"),
    pages: path.resolve(__dirname, "src/pages")
  }),
  cfg => {
    c = cfg.module.rules.find(e => Array.isArray(e.oneOf)).oneOf;
    console.log(c);
    return cfg;
  }
);
