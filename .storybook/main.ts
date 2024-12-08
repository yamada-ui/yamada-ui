import type { StorybookConfig } from "@storybook/react-vite"

const config: StorybookConfig = {
  addons: [
    "@storybook/addon-viewport",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-backgrounds",
    "@storybook/addon-measure",
    "@storybook/addon-storysource",
    "storybook-dark-mode",
  ],
  core: { disableTelemetry: true },
  framework: "@storybook/react-vite",
  stories: ["../stories/**/*.@(mdx|stories.@(tsx))"],
  typescript: { reactDocgen: false },
}

export default config
