import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Joystick as LucideJoystickIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `JoystickIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const JoystickIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideJoystickIcon} {...props} />
))

/**
 * @deprecated Use `JoystickIcon` instead.
 */
export const Joystick = JoystickIcon
