import { ui } from '../../system'
import { HTMLUIProps } from '../../types'

export type SpacerProps = HTMLUIProps<'div'>

export const Spacer = ui('div', {
  baseStyle: {
    flex: 1,
    justifySelf: 'stretch',
    alignSelf: 'stretch',
  },
})
