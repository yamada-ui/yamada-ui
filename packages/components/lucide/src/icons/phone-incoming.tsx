import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PhoneIncoming as LucidePhoneIncomingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PhoneIncomingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PhoneIncomingIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucidePhoneIncomingIcon} {...props} />
  ),
)

/**
 * @deprecated Use `PhoneIncomingIcon` instead.
 */
export const PhoneIncoming = PhoneIncomingIcon
