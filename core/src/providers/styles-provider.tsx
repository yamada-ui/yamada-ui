import { createContext } from '@yamada-ui/utils'

export const [StylesProvider, useStyles] = createContext<any>({
  name: 'StylesContext',
  errorMessage:
    'useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` ',
})
