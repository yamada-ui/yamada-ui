import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Expand as LucideExpandIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ExpandIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ExpandIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideExpandIcon} {...props} />
))

/**
 * @deprecated Use `ExpandIcon` instead.
 */
export const Expand = ExpandIcon
