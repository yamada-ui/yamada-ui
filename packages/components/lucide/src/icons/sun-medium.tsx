import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SunMedium as LucideSunMediumIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SunMediumIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SunMediumIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideSunMediumIcon} {...props} />,
)

/**
 * @deprecated Use `SunMediumIcon` instead.
 */
export const SunMedium = SunMediumIcon
