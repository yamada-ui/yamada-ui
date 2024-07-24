import { forwardRef } from "@yamada-ui/core"
import { ClockArrowDown as ClockArrowDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ClockArrowDownProps = LucideIconProps

/**
 * `ClockArrowDown` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClockArrowDown = forwardRef<ClockArrowDownProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ClockArrowDownIcon} {...props} />,
)
