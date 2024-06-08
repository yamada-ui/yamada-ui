import { forwardRef } from "@yamada-ui/core"
import { Theater as TheaterIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TheaterProps = LucideIconProps

/**
 * `Theater` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Theater = forwardRef<TheaterProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TheaterIcon} {...props} />
))
