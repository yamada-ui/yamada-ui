const path = require("path")
const { getLoader, loaderByName } = require("@craco/craco")

const absolutePath = path.join(__dirname, "../../packages/react")

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName("babel-loader"),
      )

      if (isFound) {
        let include

        if (Array.isArray(match.loader.include)) {
          include = match.loader.include
        } else {
          include = [match.loader.include]
        }

        match.loader.include = include.concat[absolutePath]
      }

      return webpackConfig
    },
  },
}
