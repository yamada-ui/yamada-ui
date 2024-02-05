import type { StorybookConfig } from "@storybook/react-vite"
import { mergeConfig } from "vite"
import path from "path"

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  features: {
    buildStoriesJson: true,
  },
  core: {
    disableTelemetry: true,
  },
  stories: ["../stories/**/*.stories.@(tsx|mdx)"],
  addons: [
    "@storybook/addon-viewport",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-backgrounds",
    "@storybook/addon-measure",
    "@storybook/addon-storysource",
    "storybook-dark-mode",
  ],
  viteFinal: async (config) => {
    config = mergeConfig(config, {
      resolve: {
        alias: [
          {
            find: /\@yamada-ui\/react$/,
            replacement: path.resolve(__dirname, "../packages/react/src"),
          },
          {
            find: /\@yamada-ui\/theme$/,
            replacement: path.resolve(__dirname, "../packages/theme/src"),
          },
        ],
      },
    })

    config.esbuild = undefined

    return config
  },
  typescript: {
    reactDocgen: false,
  },
}

module.exports = config
