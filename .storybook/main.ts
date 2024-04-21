import type { StorybookConfig } from "@storybook/react-vite"
import { InlineConfig, UserConfig, mergeConfig } from "vite"
import path, { dirname, join } from "path"

const getAbsolutePath = (value: string): any =>
  dirname(require.resolve(join(value, "package.json")))

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
    config = mergeConfig<InlineConfig, UserConfig>(config, {
      plugins: [
        {
          name: "force-reload-on-specific-files",
          handleHotUpdate: ({ file, server }) => {
            const isTheme = file.startsWith(
              path.resolve(__dirname, "../packages/theme/src"),
            )
            const isProviders = file.startsWith(
              path.resolve(__dirname, "../packages/providers/src"),
            )

            if (isTheme || isProviders) {
              server.hot.send({ type: "full-reload" })
            }
          },
        },
      ],
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

export default config
