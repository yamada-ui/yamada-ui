import type { CSSUIObject, CSSUIProps, FC, HTMLUIProps } from "../../core"
import { ui } from "../../core"

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
export const Grid: FC<GridProps> = ({
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
}) => {
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

  return <ui.div __css={css} {...rest} />
}

Grid.__ui__ = "Grid"
