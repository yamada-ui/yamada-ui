import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { PhoneOutgoing as OriginalPhoneOutgoing } from "lucide-react"

/**
 * `PhoneOutgoingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PhoneOutgoingIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalPhoneOutgoing} {...props} />
))

/**
 * `PhoneOutgoing` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `PhoneOutgoingIcon` instead.
 */
export const PhoneOutgoing = PhoneOutgoingIcon
