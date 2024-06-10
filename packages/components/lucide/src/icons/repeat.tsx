import { forwardRef } from "@yamada-ui/core"
import { Repeat as RepeatIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type RepeatProps = LucideIconProps

/**
 * `Repeat` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Repeat = forwardRef<RepeatProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={RepeatIcon} {...props} />
))
