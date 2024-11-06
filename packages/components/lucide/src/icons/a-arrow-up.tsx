import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AArrowUp as LucideAArrowUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AArrowUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AArrowUpIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideAArrowUpIcon} {...props} />
))

/**
 * @deprecated Use `AArrowUpIcon` instead.
 */
export const AArrowUp = AArrowUpIcon
