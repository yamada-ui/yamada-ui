import { forwardRef } from "@yamada-ui/core"
import { KeyboardMusic as KeyboardMusicIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `KeyboardMusic` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const KeyboardMusic = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={KeyboardMusicIcon} {...props} />,
)
