import { forwardRef } from "@yamada-ui/core"
import { ThermometerSun as ThermometerSunIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ThermometerSunProps = LucideIconProps

/**
 * `ThermometerSun` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ThermometerSun = forwardRef<ThermometerSunProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ThermometerSunIcon} {...props} />,
)
