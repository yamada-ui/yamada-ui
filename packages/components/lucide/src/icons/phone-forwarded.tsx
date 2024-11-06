import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PhoneForwarded as LucidePhoneForwardedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PhoneForwardedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PhoneForwardedIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucidePhoneForwardedIcon} {...props} />
  ),
)

/**
 * @deprecated Use `PhoneForwardedIcon` instead.
 */
export const PhoneForwarded = PhoneForwardedIcon
