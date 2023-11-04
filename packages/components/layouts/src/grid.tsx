import {
  ui,
  forwardRef,
  HTMLUIProps,
  CSSUIObject,
  Token,
} from '@yamada-ui/core'
import { replaceObject } from '@yamada-ui/utils'

type GridOptions = {
  /**
   * The CSS `grid-template-columns` property.
   */
  templateColumns?: CSSUIObject['gridTemplateColumns']
  /**
   * The CSS `grid-template-rows` property.
   */
  templateRows?: CSSUIObject['gridTemplateRows']
  /**
   * The CSS `grid-template-areas` property.
   */
  templateAreas?: CSSUIObject['gridTemplateAreas']
  /**
   * The CSS `grid-column` property.
   */
  column?: CSSUIObject['gridColumn']
  /**
   * The CSS `grid-row` property.
   */
  row?: CSSUIObject['gridRow']
  /**
   * The CSS `grid-area` property.
   */
  area?: CSSUIObject['gridArea']
  /**
   * The CSS `grid-gap` property.
   */
  gap?: CSSUIObject['gridGap']
  /**
   * The CSS `grid-row-gap` property.
   */
  rowGap?: CSSUIObject['gridRowGap']
  /**
   * The CSS `grid-column-gap` property.
   */
  columnGap?: CSSUIObject['gridColumnGap']
  /**
   * The CSS `grid-auto-flow` property.
   */
  autoFlow?: CSSUIObject['gridAutoFlow']
  /**
   * The CSS `grid-auto-columns` property.
   */
  autoColumns?: CSSUIObject['gridAutoColumns']
  /**
   * The CSS `grid-auto-rows` property.
   */
  autoRows?: CSSUIObject['gridAutoRows']
}

export type GridProps = HTMLUIProps<'div'> & GridOptions

export const Grid = forwardRef<GridProps, 'div'>(
  (
    {
      templateColumns: gridTemplateColumns,
      templateRows: gridTemplateRows,
      templateAreas: gridTemplateAreas,
      column: gridColumn,
      row: gridRow,
      area: gridArea,
      gap: gridGap,
      rowGap: gridRowGap,
      columnGap: gridColumnGap,
      autoFlow: gridAutoFlow,
      autoColumns: gridAutoColumns,
      autoRows: gridAutoRows,
      ...rest
    },
    ref,
  ) => {
    const css: CSSUIObject = {
      display: 'grid',
      gridTemplateColumns,
      gridTemplateRows,
      gridTemplateAreas,
      gridColumn,
      gridRow,
      gridArea,
      gridGap,
      gridRowGap,
      gridColumnGap,
      gridAutoFlow,
      gridAutoColumns,
      gridAutoRows,
    }

    return <ui.div ref={ref} __css={css} {...rest} />
  },
)

type GridItemOptions = {
  /**
   * The CSS `grid-area` property.
   */
  area?: CSSUIObject['gridArea']
  /**
   * The number of columns the grid item should `span`.
   */
  colSpan?: Token<number>
  /**
   * The number of rows the grid item should `span`.
   */
  rowSpan?: Token<number>
  /**
   * The CSS `grid-column-start` property.
   */
  colStart?: CSSUIObject['gridColumnStart']
  /**
   * The CSS `grid-column-end` property.
   */
  colEnd?: CSSUIObject['gridColumnEnd']
  /**
   * The CSS `grid-row-start` property.
   */
  rowStart?: CSSUIObject['gridRowStart']
  /**
   * The CSS `grid-row-end` property.
   */
  rowEnd?: CSSUIObject['gridRowEnd']
}

export type GridItemProps = HTMLUIProps<'div'> & GridItemOptions

export const GridItem = forwardRef<GridItemProps, 'div'>(
  (
    {
      area: gridArea,
      colSpan,
      rowSpan,
      colStart: gridColumnStart,
      colEnd: gridColumnEnd,
      rowStart: gridRowStart,
      rowEnd: gridRowEnd,
      ...rest
    },
    ref,
  ) => {
    const css: CSSUIObject = {
      gridColumn: replaceObject(colSpan, (value) =>
        value != null ? `span ${value}/span ${value}` : undefined,
      ),
      gridRow: replaceObject(rowSpan, (value) =>
        value != null ? `span ${value}/span ${value}` : undefined,
      ),
      gridColumnStart,
      gridColumnEnd,
      gridRowStart,
      gridRowEnd,
      gridArea,
    }

    return <ui.div ref={ref} __css={css} {...rest} />
  },
)
