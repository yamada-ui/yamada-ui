import { forwardRef } from "@yamada-ui/core"
import { Sprout as SproutIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SproutProps = LucideIconProps

/**
 * `Sprout` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Sprout = forwardRef<SproutProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SproutIcon} {...props} />
))
