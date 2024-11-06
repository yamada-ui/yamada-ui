import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BookAudio as LucideBookAudioIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BookAudioIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookAudioIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideBookAudioIcon} {...props} />,
)

/**
 * @deprecated Use `BookAudioIcon` instead.
 */
export const BookAudio = BookAudioIcon
