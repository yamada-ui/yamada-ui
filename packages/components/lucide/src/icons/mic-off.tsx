import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MicOff as LucideMicOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MicOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MicOffIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideMicOffIcon} {...props} />
))

/**
 * @deprecated Use `MicOffIcon` instead.
 */
export const MicOff = MicOffIcon
