import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Braces as LucideBracesIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BracesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BracesIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBracesIcon} {...props} />
))

/**
 * @deprecated Use `BracesIcon` instead.
 */
export const Braces = BracesIcon
