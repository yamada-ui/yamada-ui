import { ui, forwardRef, HTMLUIProps, CSSUIProps, Token } from '@yamada-ui/core'
import { replaceObject } from '@yamada-ui/utils'

type GridOptions = {
  /**
   * The CSS `grid-template-columns` property.
   */
  templateColumns?: CSSUIProps['gridTemplateColumns']
  /**
   * The CSS `grid-template-rows` property.
   */
  templateRows?: CSSUIProps['gridTemplateRows']
  /**
   * The CSS `grid-template-areas` property.
   */
  templateAreas?: CSSUIProps['gridTemplateAreas']
  /**
   * The CSS `grid-column` property.
   */
  column?: CSSUIProps['gridColumn']
  /**
   * The CSS `grid-row` property.
   */
  row?: CSSUIProps['gridRow']
  /**
   * The CSS `grid-area` property.
   */
  area?: CSSUIProps['gridArea']
  /**
   * The CSS `grid-gap` property.
   */
  gap?: CSSUIProps['gridGap']
  /**
   * The CSS `grid-row-gap` property.
   */
  rowGap?: CSSUIProps['gridRowGap']
  /**
   * The CSS `grid-column-gap` property.
   */
  columnGap?: CSSUIProps['gridColumnGap']
  /**
   * The CSS `grid-auto-flow` property.
   */
  autoFlow?: CSSUIProps['gridAutoFlow']
  /**
   * The CSS `grid-auto-columns` property.
   */
  autoColumns?: CSSUIProps['gridAutoColumns']
  /**
   * The CSS `grid-auto-rows` property.
   */
  autoRows?: CSSUIProps['gridAutoRows']
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
    const css = {
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
  area?: CSSUIProps['gridArea']
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
  colStart?: CSSUIProps['gridColumnStart']
  /**
   * The CSS `grid-column-end` property.
   */
  colEnd?: CSSUIProps['gridColumnEnd']
  /**
   * The CSS `grid-row-start` property.
   */
  rowStart?: CSSUIProps['gridRowStart']
  /**
   * The CSS `grid-row-end` property.
   */
  rowEnd?: CSSUIProps['gridRowEnd']
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
    const css = {
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
