import type * as CSS from 'csstype'
import { Token } from '../css'
import { Configs } from './config'

export const filter: Configs = {
  filter: true,
  backdropFilter: true,
}

export type FilterProps<Y = 'responsive', M = 'colorMode'> = {
  /**
   * The CSS `filter` property.
   */
  filter?: Token<CSS.Property.Filter, unknown, Y, M>
  /**
   * The CSS `backdrop-filter` property.
   */
  backdropFilter?: Token<CSS.Property.BackdropFilter, unknown, Y, M>
}
