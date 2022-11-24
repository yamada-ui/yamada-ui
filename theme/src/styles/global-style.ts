import { UIStyle } from '@yamada-ui/styled'

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
    color: ['gray.400', 'whiteAlpha.400'],
  },
  '*, *::before, &::after': {
    borderColor: 'border',
    wordWrap: 'break-word',
  },
}
