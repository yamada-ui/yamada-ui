import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Speech as LucideSpeechIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SpeechIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SpeechIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSpeechIcon} {...props} />
))

/**
 * @deprecated Use `SpeechIcon` instead.
 */
export const Speech = SpeechIcon
