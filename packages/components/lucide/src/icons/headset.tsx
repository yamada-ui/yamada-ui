import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Headset as LucideHeadsetIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HeadsetIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HeadsetIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideHeadsetIcon} {...props} />
))

/**
 * @deprecated Use `HeadsetIcon` instead.
 */
export const Headset = HeadsetIcon
