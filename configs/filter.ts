import * as CSS from 'csstype'
import { Configs } from 'configs'
import { Token } from 'types'

export const filter: Configs = {
  filter: true,
  backdropFilter: true,
}

export type FilterProps<Y = 'responsive', M = 'scheme'> = {
  filter?: Token<CSS.Property.Filter, unknown, Y, M>
  backdropFilter?: Token<CSS.Property.BackdropFilter, unknown, Y, M>
}
