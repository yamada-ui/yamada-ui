import React from 'react'
import { ArgTypes, DecoratorFn, Parameters } from '@storybook/react'
import { themes } from '@storybook/theming'
import { UITheme } from './theme'
import { createArgTypes } from './arg-types'
import { Docs } from './docs'
import { Provider } from './provider'

export const argTypes: ArgTypes = createArgTypes()

export const parameters: Parameters = {
  darkMode: {
    light: { ...themes.light, ...UITheme.light },
    dark: { ...themes.dark, ...UITheme.dark },
  },
  options: {
    storySort: { order: ['Documents', ['Welcome', '*'], 'Components', 'Hooks', 'System'] },
  },
  backgrounds: { disable: true },
  controls: { expanded: true },
  docs: {
    container: Docs,
  },
  layout: 'fullscreen',
}

export const decorators: DecoratorFn[] = [
  (Story) => {
    return (
      <Provider>
        <Story />
      </Provider>
    )
  },
]
