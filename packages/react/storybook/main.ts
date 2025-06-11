import type { StorybookConfig } from "@storybook/react-vite"

export const config: StorybookConfig = {
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "storybook-dark-mode",
    "storybook-i18n",
  ],
  core: { disableTelemetry: true },
  framework: "@storybook/react-vite",
  // TODO: Remove legacy-components
  stories: ["../src/!(legacy-components)/**/*.@(mdx|stories.@(tsx))"],
  typescript: { reactDocgen: false },
}

export default config
