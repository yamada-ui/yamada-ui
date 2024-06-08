import { forwardRef } from "@yamada-ui/core"
import { Thermometer as ThermometerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ThermometerProps = LucideIconProps

/**
 * `Thermometer` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Thermometer = forwardRef<ThermometerProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ThermometerIcon} {...props} />
))
