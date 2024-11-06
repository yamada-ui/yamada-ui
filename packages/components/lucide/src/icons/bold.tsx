import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Bold as LucideBoldIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BoldIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BoldIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBoldIcon} {...props} />
))

/**
 * @deprecated Use `BoldIcon` instead.
 */
export const Bold = BoldIcon
