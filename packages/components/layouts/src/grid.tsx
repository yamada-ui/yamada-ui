import type {
  CSSUIObject,
  CSSUIProps,
  HTMLUIProps,
  StyledTheme,
  Token,
} from "@yamada-ui/core"
import { forwardRef, transforms, ui, useTheme } from "@yamada-ui/core"
import { getMemoizedObject as get, replaceObject } from "@yamada-ui/utils"

interface GridOptions {
  /**
   * The CSS `grid-area` property.
   */
  area?: CSSUIProps["gridArea"]
  /**
   * The CSS `grid-auto-columns` property.
   */
  autoColumns?: CSSUIProps["gridAutoColumns"]
  /**
   * The CSS `grid-auto-flow` property.
   */
  autoFlow?: CSSUIProps["gridAutoFlow"]
  /**
   * The CSS `grid-auto-rows` property.
   */
  autoRows?: CSSUIProps["gridAutoRows"]
  /**
   * The CSS `grid-column` property.
   */
  column?: CSSUIProps["gridColumn"]
  /**
   * The CSS `grid-row` property.
   */
  row?: CSSUIProps["gridRow"]
  /**
   * The CSS `grid-template-areas` property.
   */
  templateAreas?: CSSUIProps["gridTemplateAreas"]
  /**
   * The CSS `grid-template-columns` property.
   */
  templateColumns?: CSSUIProps["gridTemplateColumns"]
  /**
   * The CSS `grid-template-rows` property.
   */
  templateRows?: CSSUIProps["gridTemplateRows"]
}

export interface GridProps extends HTMLUIProps, GridOptions {}

/**
 * `Grid` is a component for managing grid layouts. It also comes with handy style shorthand.
 *
 * @see Docs https://yamada-ui.com/components/layouts/grid
 */
export const Grid = forwardRef<GridProps, "div">(
  (
    {
      area: gridArea,
      autoColumns: gridAutoColumns,
      autoFlow: gridAutoFlow,
      autoRows: gridAutoRows,
      column: gridColumn,
      columnGap,
      gap,
      row: gridRow,
      rowGap,
      templateAreas: gridTemplateAreas,
      templateColumns: gridTemplateColumns,
      templateRows: gridTemplateRows,
      ...rest
    },
    ref,
  ) => {
    const css: CSSUIObject = {
      columnGap,
      display: "grid",
      gap,
      gridArea,
      gridAutoColumns,
      gridAutoFlow,
      gridAutoRows,
      gridColumn,
      gridRow,
      gridTemplateAreas,
      gridTemplateColumns,
      gridTemplateRows,
      rowGap,
    }

    return <ui.div ref={ref} __css={css} {...rest} />
  },
)

Grid.displayName = "Grid"
Grid.__ui__ = "Grid"

const transformColumns =
  (columns: Token<number> | undefined, minWidth?: GridProps["minWidth"]) =>
  (theme: StyledTheme) => {
    if (minWidth) {
      return replaceObject(minWidth, (value) => {
        value = get(theme, `sizes.${value}`, transforms.px(value))

        return value != null
          ? `repeat(auto-fit, minmax(${value}, 1fr))`
          : undefined
      }) as CSSUIProps["gridTemplateColumns"]
    } else {
      return replaceObject(columns, (value) =>
        value != null ? `repeat(${value}, minmax(0, 1fr))` : undefined,
      ) as CSSUIProps["gridTemplateColumns"]
    }
  }

interface SimpleGridOptions {
  /**
   * The number of columns.
   */
  columns?: Token<number>
  /**
   * The width at which child elements will break into columns.
   * Pass a number for pixel values or a string for any other valid CSS length.
   */
  minChildWidth?: GridProps["minWidth"]
}

export interface SimpleGridProps
  extends Omit<GridProps, "columns">,
    SimpleGridOptions {}

/**
 * `SimpleGrid` is a component that makes `Grid` simpler and more user-friendly.
 *
 * @see Docs https://yamada-ui.com/components/layouts/simple-grid
 */
export const SimpleGrid = forwardRef<SimpleGridProps, "div">(
  ({ columns, minChildWidth, ...rest }, ref) => {
    const { theme } = useTheme()
    const templateColumns = transformColumns(columns, minChildWidth)(theme)

    return <Grid ref={ref} templateColumns={templateColumns} {...rest} />
  },
)

SimpleGrid.displayName = "SimpleGrid"
SimpleGrid.__ui__ = "SimpleGrid"

interface GridItemOptions {
  /**
   * The CSS `grid-area` property.
   */
  area?: CSSUIProps["gridArea"]
  /**
   * The CSS `grid-column-end` property.
   */
  colEnd?: CSSUIProps["gridColumnEnd"]
  /**
   * The number of columns the grid item should `span`.
   */
  colSpan?: Token<number>
  /**
   * The CSS `grid-column-start` property.
   */
  colStart?: CSSUIProps["gridColumnStart"]
  /**
   * The CSS `grid-row-end` property.
   */
  rowEnd?: CSSUIProps["gridRowEnd"]
  /**
   * The number of rows the grid item should `span`.
   */
  rowSpan?: Token<number>
  /**
   * The CSS `grid-row-start` property.
   */
  rowStart?: CSSUIProps["gridRowStart"]
}

export interface GridItemProps extends HTMLUIProps, GridItemOptions {}

export const GridItem = forwardRef<GridItemProps, "div">(
  (
    {
      area: gridArea,
      colEnd: gridColumnEnd,
      colSpan,
      colStart: gridColumnStart,
      rowEnd: gridRowEnd,
      rowSpan,
      rowStart: gridRowStart,
      ...rest
    },
    ref,
  ) => {
    const css: CSSUIObject = {
      gridArea,
      gridColumn: replaceObject(colSpan, (value) =>
        value != null ? `span ${value}/span ${value}` : undefined,
      ),
      gridColumnEnd,
      gridColumnStart,
      gridRow: replaceObject(rowSpan, (value) =>
        value != null ? `span ${value}/span ${value}` : undefined,
      ),
      gridRowEnd,
      gridRowStart,
    }

    return <ui.div ref={ref} __css={css} {...rest} />
  },
)

GridItem.displayName = "GridItem"
GridItem.__ui__ = "GridItem"
