import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { RotateCw as LucideRotateCwIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RotateCwIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RotateCwIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideRotateCwIcon} {...props} />
))

/**
 * @deprecated Use `RotateCwIcon` instead.
 */
export const RotateCw = RotateCwIcon
