import type { FC, Token } from "../../core"
import type { GridProps } from "./grid"
import { useMemo } from "react"
import { replaceObject } from "../../utils"
import { Grid } from "./grid"

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
export const SimpleGrid: FC<SimpleGridProps> = ({
  columns,
  minChildWidth,
  ...rest
}) => {
  const templateColumns = useMemo(() => {
    if (minChildWidth) {
      return replaceObject(minChildWidth, (value) => {
        return value != null
          ? `repeat(auto-fit, minmax($sizes.${value}, 1fr))`
          : undefined
      })
    } else {
      return replaceObject(columns, (value) =>
        value != null ? `repeat(${value}, minmax(0, 1fr))` : undefined,
      )
    }
  }, [minChildWidth, columns])

  return <Grid templateColumns={templateColumns} {...rest} />
}

SimpleGrid.__ui__ = "SimpleGrid"
