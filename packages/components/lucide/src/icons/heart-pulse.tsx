import { forwardRef } from "@yamada-ui/core"
import { HeartPulse as HeartPulseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type HeartPulseProps = LucideIconProps

/**
 * `HeartPulse` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HeartPulse = forwardRef<HeartPulseProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={HeartPulseIcon} {...props} />
))
