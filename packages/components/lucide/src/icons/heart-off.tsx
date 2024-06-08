import { forwardRef } from "@yamada-ui/core"
import { HeartOff as HeartOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type HeartOffProps = LucideIconProps

/**
 * `HeartOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HeartOff = forwardRef<HeartOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={HeartOffIcon} {...props} />
))
