import { UIStyle } from '@yamada-ui/styled'

export const globalStyle: UIStyle = () => ({
  body: {
    fontFamily: 'body',
    bg: ['white', 'black'],
    color: ['black', 'white'],
    lineHeight: 'base',
    overflowX: 'hidden',
  },
  '*': {
    transitionProperty: 'all',
    transitionDuration: 'normal',
  },
  '*::placeholder': {
    color: ['gray.400', 'whiteAlpha.400'],
  },
})
