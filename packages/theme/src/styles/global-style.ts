import { UIStyle } from '@yamada-ui/core'

export const globalStyle: UIStyle = {
  body: {
    fontFamily: 'body',
    bg: ['white', 'black'],
    color: ['black', 'white'],
    transitionProperty: 'background-color',
    transitionDuration: 'normal',
    lineHeight: 'base',
    overflowX: 'hidden',
  },
  '*::placeholder': {
    color: 'gray.500',
  },
  _dark: {
    '*::placeholder': {
      color: 'whiteAlpha.400',
    },
  },
  '*, *::before, *::after': {
    borderWidth: '0',
    borderStyle: 'solid',
    borderColor: 'border',
    wordWrap: 'break-word',
  },
}
