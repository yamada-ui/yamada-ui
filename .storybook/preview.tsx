import React from 'react'
import { Decorator, Parameters } from '@storybook/react'
import { themes } from '@storybook/theming'
import { UITheme } from './theme'
import { StoryProvider, DocsContainer } from './components'

console.log(themes)

export const parameters: Parameters = {
  darkMode: {
    light: { ...themes.light, ...UITheme.light },
    dark: { ...themes.dark, ...UITheme.dark },
  },
  options: {
    storySort: {
      order: ['Documents', ['Welcome', '*'], 'Components', 'Hooks', 'System'],
    },
  },
  backgrounds: { disable: true },
  controls: { expanded: true },
  docs: { container: DocsContainer },
  layout: 'fullscreen',
}

export const decorators: Decorator[] = [
  (Story) => {
    return (
      <StoryProvider>
        <Story />
      </StoryProvider>
    )
  },
]
