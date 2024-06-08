import { forwardRef } from "@yamada-ui/core"
import { SunSnow as SunSnowIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SunSnowProps = LucideIconProps

/**
 * `SunSnow` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SunSnow = forwardRef<SunSnowProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SunSnowIcon} {...props} />
))
