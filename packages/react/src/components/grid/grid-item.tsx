import type { CSSProps, HTMLStyledProps, StyleValue } from "../../core"
import { createComponent } from "../../core"
import { replaceObject } from "../../utils"

export interface GridItemProps extends HTMLStyledProps {
  /**
   * The CSS `grid-area` property.
   */
  area?: CSSProps["gridArea"]
  /**
   * The CSS `grid-column-end` property.
   */
  colEnd?: CSSProps["gridColumnEnd"]
  /**
   * The number of columns the grid item should `span`.
   */
  colSpan?: StyleValue<number>
  /**
   * The CSS `grid-column-start` property.
   */
  colStart?: CSSProps["gridColumnStart"]
  /**
   * The CSS `grid-row-end` property.
   */
  rowEnd?: CSSProps["gridRowEnd"]
  /**
   * The number of rows the grid item should `span`.
   */
  rowSpan?: StyleValue<number>
  /**
   * The CSS `grid-row-start` property.
   */
  rowStart?: CSSProps["gridRowStart"]
}

export const {
  PropsContext: GridItemPropsContext,
  usePropsContext: useGridItemPropsContext,
  withContext,
} = createComponent<GridItemProps>("grid-item")

export const GridItem = withContext("div")(
  undefined,
  ({
    area: gridArea,
    colEnd: gridColumnEnd,
    colSpan,
    colStart: gridColumnStart,
    rowEnd: gridRowEnd,
    rowSpan,
    rowStart: gridRowStart,
    ...rest
  }) => ({
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
    ...rest,
  }),
)
