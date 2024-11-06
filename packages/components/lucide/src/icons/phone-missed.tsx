import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PhoneMissed as LucidePhoneMissedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PhoneMissedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PhoneMissedIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucidePhoneMissedIcon} {...props} />
  ),
)

/**
 * @deprecated Use `PhoneMissedIcon` instead.
 */
export const PhoneMissed = PhoneMissedIcon
