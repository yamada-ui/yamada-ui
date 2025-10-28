import type { ReactElement } from "react"
import type { LabelProps } from "recharts"
import type { ActiveDotProps } from "recharts/types/util/types"
import type { HTMLStyledProps } from "../../core"
import type { Merge } from "../../utils"

export type GridAxis = "none" | "x" | "xy" | "y"

export type Layout = "horizontal" | "vertical"

export type ChartType = "default" | "percent" | "split" | "stacked"

export type DotProps = ActiveDotProps

export type Dot =
  | ((props: DotProps) => ReactElement<SVGElement>)
  | Omit<HTMLStyledProps<"circle">, "points">

export type Label =
  | ((props: LabelProps) => ReactElement<SVGElement>)
  | Merge<
      HTMLStyledProps<"text">,
      Omit<LabelProps, "color" | "fill" | "stroke" | "strokeWidth">
    >
  | number
  | string
