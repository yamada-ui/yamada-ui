import type * as CSS from 'csstype'
import { Token } from '../css'
import { Configs, configs } from './config'

export const color: Configs = {
  color: configs.color('color'),
  textColor: configs.color('color'),
  fill: configs.color('fill'),
  stroke: configs.color('stroke'),
}

export type ColorProps<Y = 'responsive', M = 'colorMode'> = {
  /**
   * The CSS `color` property.
   */
  color?: Token<CSS.Property.Color, 'colors', Y, M>
  /**
   * The CSS `color` property.
   */
  textColor?: Token<CSS.Property.Color, 'colors', Y, M>
  /**
   * The CSS `fill` property.
   */
  fill?: Token<CSS.Property.Color, 'colors', Y, M>
  /**
   * The CSS `stroke` property.
   */
  stroke?: Token<CSS.Property.Color, 'colors', Y, M>
}
