const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        baseUrl: "./",
        aliases: {
          "@hooks": "./src/hooks",
          "@context": "./src/context",
          "@utils": "./src/utils",
          "@components": "./src/components",
        }
      }
    }
  ]
};