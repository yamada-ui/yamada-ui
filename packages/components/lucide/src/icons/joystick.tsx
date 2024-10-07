import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Joystick as JoystickIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Joystick` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Joystick = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={JoystickIcon} {...props} />
))
