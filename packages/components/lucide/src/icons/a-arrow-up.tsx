import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AArrowUp as AArrowUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AArrowUp` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AArrowUp = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={AArrowUpIcon} {...props} />
))
