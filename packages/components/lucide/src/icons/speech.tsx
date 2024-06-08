import { forwardRef } from "@yamada-ui/core"
import { Speech as SpeechIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SpeechProps = LucideIconProps

/**
 * `Speech` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Speech = forwardRef<SpeechProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SpeechIcon} {...props} />
))
