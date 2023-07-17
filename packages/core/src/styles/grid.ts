import type * as CSS from 'csstype'
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

export type GridProps<Y = 'responsive', M = 'colorMode'> = {
  /**
   * The CSS `grid-gap` property.
   */
  gridGap?: Token<CSS.Property.GridGap | number, 'spaces', Y, M>
  /**
   * The CSS `grid-column-gap` property.
   */
  gridColumnGap?: Token<CSS.Property.GridColumnGap | number, 'spaces', Y, M>
  /**
   * The CSS `grid-row-gap` property.
   */
  gridRowGap?: Token<CSS.Property.GridRowGap | number, 'spaces', Y, M>
  /**
   * The CSS `grid-column-start` property.
   */
  gridColumnStart?: Token<CSS.Property.GridColumnStart, unknown, Y, M>
  /**
   * The CSS `grid-row-start` property.
   */
  gridRowStart?: Token<CSS.Property.GridRowStart, unknown, Y, M>
  /**
   * The CSS `grid-row-end` property.
   */
  gridRowEnd?: Token<CSS.Property.GridRowEnd, unknown, Y, M>
  /**
   * The CSS `grid-template` property.
   */
  gridTemplate?: Token<CSS.Property.GridTemplate, unknown, Y, M>
  /**
   * The CSS `grid-column-end` property.
   */
  gridColumnEnd?: Token<CSS.Property.GridColumnEnd, unknown, Y, M>
  /**
   * The CSS `grid-column` property.
   */
  gridColumn?: Token<CSS.Property.GridColumn, unknown, Y, M>
  /**
   * The CSS `grid-row` property.
   */
  gridRow?: Token<CSS.Property.GridRow, unknown, Y, M>
  /**
   * The CSS `grid-auto-flow` property.
   */
  gridAutoFlow?: Token<CSS.Property.GridAutoFlow, unknown, Y, M>
  /**
   * The CSS `grid-auto-columns` property.
   */
  gridAutoColumns?: Token<CSS.Property.GridAutoColumns, unknown, Y, M>
  /**
   * The CSS `grid-auto-rows` property.
   */
  gridAutoRows?: Token<CSS.Property.GridAutoRows, unknown, Y, M>
  /**
   * The CSS `grid-template-columns` property.
   */
  gridTemplateColumns?: Token<CSS.Property.GridTemplateColumns, unknown, Y, M>
  /**
   * The CSS `grid-template-rows` property.
   */
  gridTemplateRows?: Token<CSS.Property.GridTemplateRows, unknown, Y, M>
  /**
   * The CSS `grid-template-areas` property.
   */
  gridTemplateAreas?: Token<CSS.Property.GridTemplateAreas, unknown, Y, M>
  /**
   * The CSS `grid-area` property.
   */
  gridArea?: Token<CSS.Property.GridArea, unknown, Y, M>
}
