import { forwardRef } from "@yamada-ui/core"
import { Piano as PianoIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PianoProps = LucideIconProps

/**
 * `Piano` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Piano = forwardRef<PianoProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PianoIcon} {...props} />
))
