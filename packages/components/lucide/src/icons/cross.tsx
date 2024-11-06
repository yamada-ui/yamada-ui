import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Cross as LucideCrossIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CrossIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CrossIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCrossIcon} {...props} />
))

/**
 * @deprecated Use `CrossIcon` instead.
 */
export const Cross = CrossIcon
