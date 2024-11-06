import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Squircle as LucideSquircleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquircleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquircleIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSquircleIcon} {...props} />
))

/**
 * @deprecated Use `SquircleIcon` instead.
 */
export const Squircle = SquircleIcon
