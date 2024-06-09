import { forwardRef } from "@yamada-ui/core"
import { Sunset as SunsetIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SunsetProps = LucideIconProps

/**
 * `Sunset` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Sunset = forwardRef<SunsetProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SunsetIcon} {...props} />
))
