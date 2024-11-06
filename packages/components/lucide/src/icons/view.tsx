import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { View as LucideViewIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ViewIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ViewIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideViewIcon} {...props} />
))

/**
 * @deprecated Use `ViewIcon` instead.
 */
export const View = ViewIcon
