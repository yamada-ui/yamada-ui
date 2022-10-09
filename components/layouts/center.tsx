import { ui } from '../../system'
import { HTMLUIProps } from '../../types'

export type CenterProps = HTMLUIProps<'div'>

export const Center = ui('div', {
  baseStyle: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
})
