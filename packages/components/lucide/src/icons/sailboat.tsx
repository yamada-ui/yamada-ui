import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Sailboat as LucideSailboatIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SailboatIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SailboatIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSailboatIcon} {...props} />
))

/**
 * @deprecated Use `SailboatIcon` instead.
 */
export const Sailboat = SailboatIcon
