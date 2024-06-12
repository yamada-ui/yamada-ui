import { forwardRef } from "@yamada-ui/core"
import { Sun as SunIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SunProps = LucideIconProps

/**
 * `Sun` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Sun = forwardRef<SunProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SunIcon} {...props} />
))
