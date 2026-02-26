import type { StorybookConfig } from "@storybook/react-vite"
import path from "node:path"
import { fileURLToPath } from "node:url"

const dirname = path.dirname(fileURLToPath(import.meta.url))

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
        "#storybook": path.resolve(dirname, "./"),
        "@": path.resolve(dirname, "../src"),
      }
    }
    return config
  },
}

export default config
