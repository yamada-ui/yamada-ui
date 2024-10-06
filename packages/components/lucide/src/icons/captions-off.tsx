import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CaptionsOff as CaptionsOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CaptionsOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CaptionsOff = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CaptionsOffIcon} {...props} />
))
