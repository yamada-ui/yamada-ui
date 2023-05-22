import * as CSS from 'csstype'
import { Token } from '../css'
import { Configs, configs } from './config'

export const grid: Configs = {
  gridGap: configs.space('gridGap'),
  gridColumnGap: configs.space('gridColumnGap'),
  gridRowGap: configs.space('gridRowGap'),
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridColumnStart: true,
  gridColumnEnd: true,
  gridRowStart: true,
  gridRowEnd: true,
  gridAutoRows: true,
  gridTemplate: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true,
}

export type GridProps<Y = 'responsive', M = 'colorScheme'> = {
  gridGap?: Token<CSS.Property.GridGap | number, 'spaces', Y, M>
  gridColumnGap?: Token<CSS.Property.GridColumnGap | number, 'spaces', Y, M>
  gridRowGap?: Token<CSS.Property.GridRowGap | number, 'spaces', Y, M>
  gridColumnStart?: Token<CSS.Property.GridColumnStart, unknown, Y, M>
  gridRowStart?: Token<CSS.Property.GridRowStart, unknown, Y, M>
  gridRowEnd?: Token<CSS.Property.GridRowEnd, unknown, Y, M>
  gridTemplate?: Token<CSS.Property.GridTemplate, unknown, Y, M>
  gridColumnEnd?: Token<CSS.Property.GridColumnEnd, unknown, Y, M>
  gridColumn?: Token<CSS.Property.GridColumn, unknown, Y, M>
  gridRow?: Token<CSS.Property.GridRow, unknown, Y, M>
  gridAutoFlow?: Token<CSS.Property.GridAutoFlow, unknown, Y, M>
  gridAutoColumns?: Token<CSS.Property.GridAutoColumns, unknown, Y, M>
  gridAutoRows?: Token<CSS.Property.GridAutoRows, unknown, Y, M>
  gridTemplateColumns?: Token<CSS.Property.GridTemplateColumns, unknown, Y, M>
  gridTemplateRows?: Token<CSS.Property.GridTemplateRows, unknown, Y, M>
  gridTemplateAreas?: Token<CSS.Property.GridTemplateAreas, unknown, Y, M>
  gridArea?: Token<CSS.Property.GridArea, unknown, Y, M>
}
