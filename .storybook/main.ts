import { StorybookConfig } from '@storybook/core-common'
import fs from 'fs'

const path = (target: string) => `${process.cwd()}/${target}`

const config: StorybookConfig = {
  core: {
    builder: '@storybook/builder-webpack5',
    disableTelemetry: true,
  },
  stories: ['../stories/**/*.stories.@(tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    'storybook-dark-mode',
  ],
  framework: '@storybook/react',
  typescript: {
    reactDocgen: false,
  },
  webpackFinal: async (config) => {
    if (config.resolve?.alias) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@emotion/styled': path('node_modules/@emotion/styled'),
        '@emotion/react': path('node_modules/@emotion/react'),
      }
    }

    config.resolve?.extensions?.push('.ts', '.tsx')

    return config
  },
}

module.exports = config
