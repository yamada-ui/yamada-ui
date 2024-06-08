import { forwardRef } from "@yamada-ui/core"
import { AirVent as AirVentIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AirVentProps = LucideIconProps

/**
 * `AirVent` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AirVent = forwardRef<AirVentProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={AirVentIcon} {...props} />
))
