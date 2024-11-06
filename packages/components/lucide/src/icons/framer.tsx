import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Framer as LucideFramerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FramerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FramerIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideFramerIcon} {...props} />
))

/**
 * @deprecated Use `FramerIcon` instead.
 */
export const Framer = FramerIcon
