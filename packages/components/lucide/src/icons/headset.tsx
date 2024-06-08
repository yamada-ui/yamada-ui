import { forwardRef } from "@yamada-ui/core"
import { Headset as HeadsetIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type HeadsetProps = LucideIconProps

/**
 * `Headset` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Headset = forwardRef<HeadsetProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={HeadsetIcon} {...props} />
))
