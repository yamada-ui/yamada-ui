import type { StorybookConfig } from "@storybook/react-vite"

export const config: StorybookConfig = {
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
  stories: ["../src/**/*.@(mdx|stories.@(tsx))"],
  typescript: { reactDocgen: false },
}

export default config
