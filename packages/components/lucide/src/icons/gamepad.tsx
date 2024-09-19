import { forwardRef } from "@yamada-ui/core"
import { Gamepad as GamepadIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `Gamepad` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Gamepad = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={GamepadIcon} {...props} />
))
