import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Theater as LucideTheaterIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TheaterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TheaterIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideTheaterIcon} {...props} />
))

/**
 * @deprecated Use `TheaterIcon` instead.
 */
export const Theater = TheaterIcon
