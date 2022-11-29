import * as CSS from 'csstype'
import { Token } from '..'
import { Configs, configs } from '.'

export const color: Configs = {
  color: configs.color('color'),
  textColor: configs.color('color'),
  fill: configs.color('fill'),
  stroke: configs.color('stroke'),
}

export type ColorProps<Y = 'responsive', M = 'colorScheme'> = {
  color?: Token<CSS.Property.Color, 'colors', Y, M>
  textColor?: Token<CSS.Property.Color, 'colors', Y, M>
  fill?: Token<CSS.Property.Color, 'colors', Y, M>
  stroke?: Token<CSS.Property.Color, 'colors', Y, M>
}
