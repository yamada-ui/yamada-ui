import { forwardRef } from "@yamada-ui/core"
import { Speaker as SpeakerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SpeakerProps = LucideIconProps

/**
 * `Speaker` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Speaker = forwardRef<SpeakerProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SpeakerIcon} {...props} />
))
