import * as CSS from 'csstype'
import { Token } from '../'
import { Configs, configs } from './'

export const list: Configs = {
  listStyleType: true,
  listStylePosition: true,
  listStylePos: configs.prop('listStylePosition'),
  listStyleImage: true,
  listStyleImg: configs.prop('listStyleImage'),
}

export type ListProps<Y = 'responsive', M = 'colorScheme'> = {
  listStyleType?: Token<CSS.Property.ListStyleType, unknown, Y, M>
  listStylePosition?: Token<CSS.Property.ListStylePosition, unknown, Y, M>
  listStylePos?: Token<CSS.Property.ListStylePosition, unknown, Y, M>
  listStyleImage?: Token<CSS.Property.ListStyleImage, unknown, Y, M>
  listStyleImg?: Token<CSS.Property.ListStyleImage, unknown, Y, M>
}
