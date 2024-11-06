import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ShowerHead as LucideShowerHeadIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ShowerHeadIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShowerHeadIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideShowerHeadIcon} {...props} />,
)

/**
 * @deprecated Use `ShowerHeadIcon` instead.
 */
export const ShowerHead = ShowerHeadIcon
