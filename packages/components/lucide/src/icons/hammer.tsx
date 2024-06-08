import { forwardRef } from "@yamada-ui/core"
import { Hammer as HammerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type HammerProps = LucideIconProps

/**
 * `Hammer` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Hammer = forwardRef<HammerProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={HammerIcon} {...props} />
))
