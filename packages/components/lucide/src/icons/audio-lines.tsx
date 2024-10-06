import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AudioLines as AudioLinesIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AudioLines` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AudioLines = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={AudioLinesIcon} {...props} />
))
