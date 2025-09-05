"use client"

import type { CSSProps, HTMLStyledProps, ThemeProps } from "../../core"
import type { GridStyle } from "./grid.style"
import { createComponent } from "../../core"
import { gridStyle } from "./grid.style"

export interface GridProps extends HTMLStyledProps, ThemeProps<GridStyle> {
  /**
   * The CSS `grid-area` property.
   */
  area?: CSSProps["gridArea"]
  /**
   * The CSS `grid-auto-columns` property.
   */
  autoColumns?: CSSProps["gridAutoColumns"]
  /**
   * The CSS `grid-auto-flow` property.
   */
  autoFlow?: CSSProps["gridAutoFlow"]
  /**
   * The CSS `grid-auto-rows` property.
   */
  autoRows?: CSSProps["gridAutoRows"]
  /**
   * The CSS `grid-column` property.
   */
  column?: CSSProps["gridColumn"]
  /**
   * The CSS `grid-row` property.
   */
  row?: CSSProps["gridRow"]
  /**
   * The CSS `grid-template-areas` property.
   */
  templateAreas?: CSSProps["gridTemplateAreas"]
  /**
   * The CSS `grid-template-columns` property.
   */
  templateColumns?: CSSProps["gridTemplateColumns"]
  /**
   * The CSS `grid-template-rows` property.
   */
  templateRows?: CSSProps["gridTemplateRows"]
}

const {
  PropsContext: GridPropsContext,
  usePropsContext: useGridPropsContext,
  withContext,
} = createComponent<GridProps, GridStyle>("grid", gridStyle)

export { GridPropsContext, useGridPropsContext }

/**
 * `Grid` is a component for managing grid layouts. It also comes with handy style shorthand.
 *
 * @see https://yamada-ui.com/docs/components/grid
 */
export const Grid = withContext("div")(
  undefined,
  ({
    area: gridArea,
    autoColumns: gridAutoColumns,
    autoFlow: gridAutoFlow,
    autoRows: gridAutoRows,
    column: gridColumn,
    templateAreas: gridTemplateAreas,
    templateColumns: gridTemplateColumns,
    templateRows: gridTemplateRows,
    ...rest
  }) => ({
    display: "grid",
    gridArea,
    gridAutoColumns,
    gridAutoFlow,
    gridAutoRows,
    gridColumn,
    gridTemplateAreas,
    gridTemplateColumns,
    gridTemplateRows,
    ...rest,
  }),
)
