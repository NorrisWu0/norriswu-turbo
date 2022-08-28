/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["@norriswu/ui-react"]);

module.exports = withTM({
  reactStrictMode: true,
});
