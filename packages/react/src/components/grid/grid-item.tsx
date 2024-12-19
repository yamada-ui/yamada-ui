import type {
  CSSUIObject,
  CSSUIProps,
  FC,
  HTMLUIProps,
  Token,
} from "../../core"
import { ui } from "../../core"
import { replaceObject } from "../../utils"

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

export const GridItem: FC<GridItemProps> = ({
  area: gridArea,
  colEnd: gridColumnEnd,
  colSpan,
  colStart: gridColumnStart,
  rowEnd: gridRowEnd,
  rowSpan,
  rowStart: gridRowStart,
  ...rest
}) => {
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

  return <ui.div __css={css} {...rest} />
}

GridItem.__ui__ = "GridItem"
