import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { KeyboardOff as LucideKeyboardOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `KeyboardOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const KeyboardOffIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideKeyboardOffIcon} {...props} />
  ),
)

/**
 * @deprecated Use `KeyboardOffIcon` instead.
 */
export const KeyboardOff = KeyboardOffIcon
