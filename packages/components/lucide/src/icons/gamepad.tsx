import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Gamepad as LucideGamepadIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GamepadIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GamepadIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideGamepadIcon} {...props} />
))

/**
 * @deprecated Use `GamepadIcon` instead.
 */
export const Gamepad = GamepadIcon
