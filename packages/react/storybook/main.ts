import type { StorybookConfig } from "@storybook/react-vite"
import { createRequire } from "node:module"
import { dirname, join } from "node:path"

const require = createRequire(import.meta.url)

export const config: StorybookConfig = {
  addons: [
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("storybook-dark-mode"),
    getAbsolutePath("storybook-i18n"),
  ],
  core: { disableTelemetry: true },
  framework: getAbsolutePath("@storybook/react-vite"),
  // TODO: Remove legacy-components
  stories: ["../src/!(legacy-components)/**/*.@(mdx|stories.@(tsx))"],
  typescript: { reactDocgen: false },
}

export default config

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")))
}
