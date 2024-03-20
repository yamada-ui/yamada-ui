import type { StorybookConfig } from "@storybook/react-vite"
import { mergeConfig } from "vite"
import path, { dirname, join } from "path"

const config: StorybookConfig = {
  framework: getAbsolutePath("@storybook/react-vite"),

  core: {
    disableTelemetry: true,
  },

  stories: ["../stories/**/*.@(mdx|stories.@(tsx))"],

  addons: [
    getAbsolutePath("@storybook/addon-viewport"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-backgrounds"),
    getAbsolutePath("@storybook/addon-measure"),
    getAbsolutePath("@storybook/addon-storysource"),
    getAbsolutePath("storybook-dark-mode"),
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

  docs: {
    autodocs: true,
  },
}

export default config

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")))
}
