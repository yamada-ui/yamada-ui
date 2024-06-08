import { forwardRef } from "@yamada-ui/core"
import { HopOff as HopOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type HopOffProps = LucideIconProps

/**
 * `HopOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HopOff = forwardRef<HopOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={HopOffIcon} {...props} />
))
