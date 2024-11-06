import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { KeyboardMusic as LucideKeyboardMusicIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `KeyboardMusicIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const KeyboardMusicIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideKeyboardMusicIcon} {...props} />
  ),
)

/**
 * @deprecated Use `KeyboardMusicIcon` instead.
 */
export const KeyboardMusic = KeyboardMusicIcon
