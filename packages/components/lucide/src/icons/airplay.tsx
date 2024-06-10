import { forwardRef } from "@yamada-ui/core"
import { Airplay as AirplayIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AirplayProps = LucideIconProps

/**
 * `Airplay` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Airplay = forwardRef<AirplayProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={AirplayIcon} {...props} />
))
