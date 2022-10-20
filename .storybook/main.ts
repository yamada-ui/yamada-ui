import { StorybookConfig } from '@storybook/core-common'

const path = (target: string) => `${process.cwd()}/${target}`

const config: StorybookConfig = {
  core: {
    builder: '@storybook/builder-webpack5',
    disableTelemetry: true,
  },
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    'storybook-dark-mode',
  ],
  framework: '@storybook/react',
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop: any) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  webpackFinal: async (config) => {
    if (config.resolve?.alias) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@emotion/styled': path('node_modules/@emotion/styled'),
        '@emotion/react': path('node_modules/@emotion/react'),
      }
    }

    return config
  },
}

module.exports = config
