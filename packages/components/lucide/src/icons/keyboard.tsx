import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Keyboard as LucideKeyboardIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `KeyboardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const KeyboardIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideKeyboardIcon} {...props} />
))

/**
 * @deprecated Use `KeyboardIcon` instead.
 */
export const Keyboard = KeyboardIcon
