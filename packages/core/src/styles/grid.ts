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

export type GridProps = {
  /**
   * The CSS `grid-gap` property.
   */
  gridGap?: Token<CSS.Property.GridGap | number, 'spaces'>
  /**
   * The CSS `grid-column-gap` property.
   */
  gridColumnGap?: Token<CSS.Property.GridColumnGap | number, 'spaces'>
  /**
   * The CSS `grid-row-gap` property.
   */
  gridRowGap?: Token<CSS.Property.GridRowGap | number, 'spaces'>
  /**
   * The CSS `grid-column-start` property.
   */
  gridColumnStart?: Token<CSS.Property.GridColumnStart>
  /**
   * The CSS `grid-row-start` property.
   */
  gridRowStart?: Token<CSS.Property.GridRowStart>
  /**
   * The CSS `grid-row-end` property.
   */
  gridRowEnd?: Token<CSS.Property.GridRowEnd>
  /**
   * The CSS `grid-template` property.
   */
  gridTemplate?: Token<CSS.Property.GridTemplate>
  /**
   * The CSS `grid-column-end` property.
   */
  gridColumnEnd?: Token<CSS.Property.GridColumnEnd>
  /**
   * The CSS `grid-column` property.
   */
  gridColumn?: Token<CSS.Property.GridColumn>
  /**
   * The CSS `grid-row` property.
   */
  gridRow?: Token<CSS.Property.GridRow>
  /**
   * The CSS `grid-auto-flow` property.
   */
  gridAutoFlow?: Token<CSS.Property.GridAutoFlow>
  /**
   * The CSS `grid-auto-columns` property.
   */
  gridAutoColumns?: Token<CSS.Property.GridAutoColumns>
  /**
   * The CSS `grid-auto-rows` property.
   */
  gridAutoRows?: Token<CSS.Property.GridAutoRows>
  /**
   * The CSS `grid-template-columns` property.
   */
  gridTemplateColumns?: Token<CSS.Property.GridTemplateColumns>
  /**
   * The CSS `grid-template-rows` property.
   */
  gridTemplateRows?: Token<CSS.Property.GridTemplateRows>
  /**
   * The CSS `grid-template-areas` property.
   */
  gridTemplateAreas?: Token<CSS.Property.GridTemplateAreas>
  /**
   * The CSS `grid-area` property.
   */
  gridArea?: Token<CSS.Property.GridArea>
}
