import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Bird as LucideBirdIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BirdIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BirdIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBirdIcon} {...props} />
))

/**
 * @deprecated Use `BirdIcon` instead.
 */
export const Bird = BirdIcon
