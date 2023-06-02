import { ui, forwardRef, HTMLUIProps, CSSUIProps, Token } from '@yamada-ui/core'
import { replaceObject } from '@yamada-ui/utils'

type GridOptions = {
  templateColumns?: CSSUIProps['gridTemplateColumns']
  templateRows?: CSSUIProps['gridTemplateRows']
  templateAreas?: CSSUIProps['gridTemplateAreas']
  column?: CSSUIProps['gridColumn']
  row?: CSSUIProps['gridRow']
  area?: CSSUIProps['gridArea']
  gap?: CSSUIProps['gridGap']
  rowGap?: CSSUIProps['gridRowGap']
  columnGap?: CSSUIProps['gridColumnGap']
  autoFlow?: CSSUIProps['gridAutoFlow']
  autoColumns?: CSSUIProps['gridAutoColumns']
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
  area?: CSSUIProps['gridArea']
  colSpan?: Token<number>
  rowSpan?: Token<number>
  colStart?: CSSUIProps['gridColumnStart']
  colEnd?: CSSUIProps['gridColumnEnd']
  rowStart?: CSSUIProps['gridRowStart']
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
      display: 'grid',
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
