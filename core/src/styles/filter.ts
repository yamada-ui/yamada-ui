import * as CSS from 'csstype'
import { Token } from '..'
import { Configs } from '.'

export const filter: Configs = {
  filter: true,
  backdropFilter: true,
}

export type FilterProps<Y = 'responsive', M = 'colorScheme'> = {
  filter?: Token<CSS.Property.Filter, unknown, Y, M>
  backdropFilter?: Token<CSS.Property.BackdropFilter, unknown, Y, M>
}
