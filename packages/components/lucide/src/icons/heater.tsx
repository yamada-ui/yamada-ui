import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Heater as LucideHeaterIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HeaterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HeaterIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideHeaterIcon} {...props} />
))

/**
 * @deprecated Use `HeaterIcon` instead.
 */
export const Heater = HeaterIcon
