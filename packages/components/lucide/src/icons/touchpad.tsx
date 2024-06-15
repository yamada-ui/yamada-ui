import { forwardRef } from "@yamada-ui/core"
import { Touchpad as TouchpadIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TouchpadProps = LucideIconProps

/**
 * `Touchpad` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Touchpad = forwardRef<TouchpadProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TouchpadIcon} {...props} />
))
