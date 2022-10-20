import { UIStyle } from '@yamada-ui/styled'

export const globalStyle: UIStyle = () => ({
  body: {
    fontFamily: 'body',
    background: ['white', 'black'],
    color: ['black', 'white'],
    lineHeight: 'base',
    overflowX: 'hidden',
  },
  '*::placeholder': {
    color: ['gray.400', 'whiteAlpha.400'],
  },
})
