import { forwardRef } from "@yamada-ui/core"
import { MicOff as MicOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MicOffProps = LucideIconProps

/**
 * `MicOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MicOff = forwardRef<MicOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MicOffIcon} {...props} />
))
