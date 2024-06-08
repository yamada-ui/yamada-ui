import { forwardRef } from "@yamada-ui/core"
import { CirclePercent as CirclePercentIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CirclePercentProps = LucideIconProps

/**
 * `CirclePercent` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CirclePercent = forwardRef<CirclePercentProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CirclePercentIcon} {...props} />,
)
