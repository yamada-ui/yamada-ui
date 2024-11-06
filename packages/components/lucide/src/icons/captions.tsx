import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Captions as LucideCaptionsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CaptionsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CaptionsIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCaptionsIcon} {...props} />
))

/**
 * @deprecated Use `CaptionsIcon` instead.
 */
export const Captions = CaptionsIcon
