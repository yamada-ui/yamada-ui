import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { HeartPulse as LucideHeartPulseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HeartPulseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HeartPulseIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideHeartPulseIcon} {...props} />,
)

/**
 * @deprecated Use `HeartPulseIcon` instead.
 */
export const HeartPulse = HeartPulseIcon
