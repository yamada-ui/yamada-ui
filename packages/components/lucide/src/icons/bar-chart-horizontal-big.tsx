import { forwardRef } from "@yamada-ui/core"
import { BarChartHorizontalBig as BarChartHorizontalBigIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BarChartHorizontalBigProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BarChartHorizontalBig = forwardRef<
  BarChartHorizontalBigProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={BarChartHorizontalBigIcon} {...props} />
))
