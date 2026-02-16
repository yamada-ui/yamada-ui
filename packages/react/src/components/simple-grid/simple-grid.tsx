"use client"

import type {
  CSSProps,
  StyleValue,
  ThemeProps,
  WithoutThemeProps,
} from "../../core"
import type { GridProps } from "../grid"
import type { SimpleGridStyle } from "./simple-grid.style"
import { useMemo } from "react"
import { createComponent } from "../../core"
import { replaceObject } from "../../utils"
import { Grid } from "../grid"
import { simpleGridStyle } from "./simple-grid.style"

export interface SimpleGridProps
  extends
    Omit<WithoutThemeProps<GridProps, SimpleGridStyle>, "columns">,
    ThemeProps<SimpleGridStyle> {
  /**
   * The number of columns.
   */
  columns?: StyleValue<number>
  /**
   * The width at which child elements will break into columns.
   * Pass a number for pixel values or a string for any other valid CSS length.
   */
  minChildWidth?: CSSProps["minWidth"]
}

const {
  PropsContext: SimpleGridPropsContext,
  usePropsContext: useSimpleGridPropsContext,
  withContext,
} = createComponent<SimpleGridProps, SimpleGridStyle>(
  "simple-grid",
  simpleGridStyle,
)

export { SimpleGridPropsContext, useSimpleGridPropsContext }

/**
 * `SimpleGrid` is a component that makes `Grid` simpler and more user-friendly.
 *
 * @see https://yamada-ui.com/docs/components/simple-grid
 */
export const SimpleGrid = withContext<"div", SimpleGridProps>(Grid)(
  undefined,
  ({ columns, minChildWidth, ...rest }) => {
    const templateColumns = useMemo(() => {
      if (minChildWidth) {
        return replaceObject(minChildWidth, (value) => {
          return value != null
            ? `repeat(auto-fit, minmax({sizes.${value}, ${value}}, 1fr))`
            : undefined
        })
      } else {
        return replaceObject(columns, (value) =>
          value != null ? `repeat(${value}, minmax(0, 1fr))` : undefined,
        )
      }
    }, [minChildWidth, columns])

    return { templateColumns, ...rest }
  },
)
