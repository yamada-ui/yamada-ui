import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { KeyboardMusic as OriginalKeyboardMusic } from "lucide-react"

/**
 * `KeyboardMusicIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const KeyboardMusicIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalKeyboardMusic} {...props} />
))

/**
 * `KeyboardMusic` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `KeyboardMusicIcon` instead.
 */
export const KeyboardMusic = KeyboardMusicIcon
