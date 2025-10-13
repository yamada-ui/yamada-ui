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
  | boolean
  | Merge<
      HTMLStyledProps<"svg">,
      Omit<Partial<DotProps>, "color" | "fill" | "stroke" | "strokeWidth">
    >
  | ReactElement<SVGElement>

export type Label =
  | ((props: LabelProps) => ReactElement<SVGElement>)
  | boolean
  | Merge<
      HTMLStyledProps<"svg">,
      Omit<Partial<LabelProps>, "color" | "fill" | "stroke" | "strokeWidth">
    >
  | number
  | ReactElement<SVGElement>
  | string
