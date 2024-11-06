import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Grab as LucideGrabIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GrabIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GrabIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideGrabIcon} {...props} />
))

/**
 * @deprecated Use `GrabIcon` instead.
 */
export const Grab = GrabIcon
