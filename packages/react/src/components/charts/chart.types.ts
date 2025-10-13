import type { ReactElement } from "react"
import type { ActiveDotProps } from "recharts/types/util/types"
import type { HTMLStyledProps } from "../../core"
import type { Merge } from "../../utils"

export type GridAxis = "none" | "x" | "xy" | "y"

export type Layout = "horizontal" | "vertical"

export type ChartType = "default" | "percent" | "split" | "stacked"

export type DotProps = ActiveDotProps

export type ActiveDotType =
  | ((props: DotProps) => ReactElement<SVGElement>)
  | boolean
  | Merge<
      HTMLStyledProps<"svg">,
      Omit<Partial<DotProps>, "color" | "fill" | "stroke" | "strokeWidth">
    >
  | ReactElement<SVGElement>
