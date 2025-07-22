import type { StorybookConfig } from "@storybook/react-vite"
import { resolve } from "node:path"

export const config: StorybookConfig = {
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  core: { disableTelemetry: true },
  features: {
    actions: false,
    backgrounds: false,
    controls: false,
    interactions: false,
  },
  framework: "@storybook/react-vite",
  stories: ["../src/**/*.@(mdx|stories.@(tsx))"],
  typescript: { reactDocgen: false },
  viteFinal: (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "#storybook": resolve(__dirname, "./"),
        "@": resolve(__dirname, "../src"),
      }
    }
    return config
  },
}

export default config
