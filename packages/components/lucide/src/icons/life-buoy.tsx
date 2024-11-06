import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { LifeBuoy as LucideLifeBuoyIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LifeBuoyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LifeBuoyIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideLifeBuoyIcon} {...props} />
))

/**
 * @deprecated Use `LifeBuoyIcon` instead.
 */
export const LifeBuoy = LifeBuoyIcon
