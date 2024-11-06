import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PhoneCall as LucidePhoneCallIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PhoneCallIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PhoneCallIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucidePhoneCallIcon} {...props} />,
)

/**
 * @deprecated Use `PhoneCallIcon` instead.
 */
export const PhoneCall = PhoneCallIcon
