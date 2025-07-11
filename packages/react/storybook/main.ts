import type { StorybookConfig } from "@storybook/react-vite"

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
  // TODO: Remove legacy-components
  stories: ["../src/!(legacy-components)/**/*.@(mdx|stories.@(tsx))"],
  typescript: { reactDocgen: false },
}

export default config
