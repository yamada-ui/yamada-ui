import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Lollipop as LucideLollipopIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LollipopIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LollipopIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideLollipopIcon} {...props} />
))

/**
 * @deprecated Use `LollipopIcon` instead.
 */
export const Lollipop = LollipopIcon
