import { forwardRef } from "@yamada-ui/core"
import { Heater as HeaterIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type HeaterProps = LucideIconProps

/**
 * `Heater` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Heater = forwardRef<HeaterProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={HeaterIcon} {...props} />
))
