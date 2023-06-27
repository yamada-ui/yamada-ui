import * as CSS from 'csstype'
import { Token } from '../css'
import { Configs, configs } from './config'

export const list: Configs = {
  listStyleType: true,
  listStylePosition: true,
  listStylePos: configs.prop('listStylePosition'),
  listStyleImage: true,
  listStyleImg: configs.prop('listStyleImage'),
}

export type ListProps<Y = 'responsive', M = 'colorMode'> = {
  /**
   * The CSS `list-style-type` property.
   */
  listStyleType?: Token<CSS.Property.ListStyleType, unknown, Y, M>
  /**
   * The CSS `list-style-position` property.
   */
  listStylePosition?: Token<CSS.Property.ListStylePosition, unknown, Y, M>
  /**
   * The CSS `list-style-position` property.
   */
  listStylePos?: Token<CSS.Property.ListStylePosition, unknown, Y, M>
  /**
   * The CSS `list-style-image` property.
   */
  listStyleImage?: Token<CSS.Property.ListStyleImage, unknown, Y, M>
  /**
   * The CSS `list-style-image` property.
   */
  listStyleImg?: Token<CSS.Property.ListStyleImage, unknown, Y, M>
}
