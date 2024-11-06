import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PhoneOutgoing as LucidePhoneOutgoingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PhoneOutgoingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PhoneOutgoingIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucidePhoneOutgoingIcon} {...props} />
  ),
)

/**
 * @deprecated Use `PhoneOutgoingIcon` instead.
 */
export const PhoneOutgoing = PhoneOutgoingIcon
