const withCSS = require("@zeit/next-css");
module.exports = {
  target: "serverless",
  ...withCSS()
};
