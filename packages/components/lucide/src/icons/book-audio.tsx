import { forwardRef } from "@yamada-ui/core"
import { BookAudio as BookAudioIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BookAudioProps = LucideIconProps

/**
 * `BookAudio` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookAudio = forwardRef<BookAudioProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BookAudioIcon} {...props} />
))
