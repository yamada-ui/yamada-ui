import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Skull as LucideSkullIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SkullIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SkullIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSkullIcon} {...props} />
))

/**
 * @deprecated Use `SkullIcon` instead.
 */
export const Skull = SkullIcon
