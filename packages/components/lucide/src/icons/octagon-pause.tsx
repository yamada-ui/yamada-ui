import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { OctagonPause as OctagonPauseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `OctagonPause` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const OctagonPause = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={OctagonPauseIcon} {...props} />
))
