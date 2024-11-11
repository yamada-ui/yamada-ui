import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { Joystick as OriginalJoystick } from "lucide-react"

/**
 * `JoystickIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const JoystickIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalJoystick} {...props} />
))

/**
 * `Joystick` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `JoystickIcon` instead.
 */
export const Joystick = JoystickIcon
