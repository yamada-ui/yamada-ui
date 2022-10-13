import { UIProvider } from '../providers'

export const parameters = {
  actions: true,
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const UI = (Component) => {
  return (
    <UIProvider>
      <Component />
    </UIProvider>
  )
}

export const decorators = [UI]
