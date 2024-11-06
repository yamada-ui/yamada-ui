import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AArrowDown as LucideAArrowDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AArrowDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AArrowDownIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideAArrowDownIcon} {...props} />,
)

/**
 * @deprecated Use `AArrowDownIcon` instead.
 */
export const AArrowDown = AArrowDownIcon
