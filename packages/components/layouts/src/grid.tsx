import type {
  HTMLUIProps,
  CSSUIObject,
  Token,
  StyledTheme,
} from "@yamada-ui/core"
import { ui, forwardRef, useTheme, transforms } from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import { replaceObject, getMemoizedObject as get } from "@yamada-ui/utils"
type GridOptions = {
  /**
   * The CSS `grid-template-columns` property.
   */
  templateColumns?: CSSUIObject["gridTemplateColumns"]
  /**
   * The CSS `grid-template-rows` property.
   */
  templateRows?: CSSUIObject["gridTemplateRows"]
  /**
   * The CSS `grid-template-areas` property.
   */
  templateAreas?: CSSUIObject["gridTemplateAreas"]
  /**
   * The CSS `grid-column` property.
   */
  column?: CSSUIObject["gridColumn"]
  /**
   * The CSS `grid-row` property.
   */
  row?: CSSUIObject["gridRow"]
  /**
   * The CSS `grid-area` property.
   */
  area?: CSSUIObject["gridArea"]
  /**
   * The CSS `grid-auto-flow` property.
   */
  autoFlow?: CSSUIObject["gridAutoFlow"]
  /**
   * The CSS `grid-auto-columns` property.
   */
  autoColumns?: CSSUIObject["gridAutoColumns"]
  /**
   * The CSS `grid-auto-rows` property.
   */
  autoRows?: CSSUIObject["gridAutoRows"]
}

export type GridProps = HTMLUIProps<"div"> & GridOptions

/**
 * `Grid` is a component for managing grid layouts. It also comes with handy style shorthand.
 *
 * @see Docs https://yamada-ui.com/components/layouts/grid
 */
export const Grid = forwardRef<GridProps, "div">(
  (
    {
      templateColumns: gridTemplateColumns,
      templateRows: gridTemplateRows,
      templateAreas: gridTemplateAreas,
      column: gridColumn,
      row: gridRow,
      area: gridArea,
      gap,
      rowGap,
      columnGap,
      autoFlow: gridAutoFlow,
      autoColumns: gridAutoColumns,
      autoRows: gridAutoRows,
      ...rest
    },
    ref,
  ) => {
    const css: CSSUIObject = {
      display: "grid",
      gridTemplateColumns,
      gridTemplateRows,
      gridTemplateAreas,
      gridColumn,
      gridRow,
      gridArea,
      gap,
      rowGap,
      columnGap,
      gridAutoFlow,
      gridAutoColumns,
      gridAutoRows,
    }

    return <ui.div ref={ref} __css={css} {...rest} />
  },
)

const transformColumns =
  (columns: Token<number> | undefined, minWidth?: GridProps["minWidth"]) =>
  (theme: StyledTheme<Dict>) => {
    if (minWidth) {
      return replaceObject(minWidth, (value) => {
        value = get(theme, `sizes.${value}`, transforms.px(value))

        return value != null
          ? `repeat(auto-fit, minmax(${value}, 1fr))`
          : undefined
      }) as CSSUIObject["gridTemplateColumns"]
    } else {
      return replaceObject(columns, (value) =>
        value != null ? `repeat(${value}, minmax(0, 1fr))` : undefined,
      ) as CSSUIObject["gridTemplateColumns"]
    }
  }

type SimpleGridOptions = {
  /**
   * The width at which child elements will break into columns.
   * Pass a number for pixel values or a string for any other valid CSS length.
   */
  minChildWidth?: GridProps["minWidth"]
  /**
   * The number of columns.
   */
  columns?: Token<number>
}

export type SimpleGridProps = GridProps & SimpleGridOptions

/**
 * `SimpleGrid` is a component that makes `Grid` simpler and more user-friendly.
 *
 * @see Docs https://yamada-ui.com/components/layouts/simple-grid
 */
export const SimpleGrid = forwardRef<SimpleGridProps, "div">(
  ({ minChildWidth, columns, ...rest }, ref) => {
    const { theme } = useTheme()
    let templateColumns = transformColumns(columns, minChildWidth)(theme)

    return <Grid ref={ref} templateColumns={templateColumns} {...rest} />
  },
)

type GridItemOptions = {
  /**
   * The CSS `grid-area` property.
   */
  area?: CSSUIObject["gridArea"]
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
  colStart?: CSSUIObject["gridColumnStart"]
  /**
   * The CSS `grid-column-end` property.
   */
  colEnd?: CSSUIObject["gridColumnEnd"]
  /**
   * The CSS `grid-row-start` property.
   */
  rowStart?: CSSUIObject["gridRowStart"]
  /**
   * The CSS `grid-row-end` property.
   */
  rowEnd?: CSSUIObject["gridRowEnd"]
}

export type GridItemProps = HTMLUIProps<"div"> & GridItemOptions

export const GridItem = forwardRef<GridItemProps, "div">(
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
