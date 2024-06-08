import { forwardRef } from "@yamada-ui/core"
import { Joystick as JoystickIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type JoystickProps = LucideIconProps

/**
 * `Joystick` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Joystick = forwardRef<JoystickProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={JoystickIcon} {...props} />
))
