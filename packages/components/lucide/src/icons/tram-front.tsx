import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TramFront as TramFrontIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TramFront` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TramFront = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TramFrontIcon} {...props} />
))
