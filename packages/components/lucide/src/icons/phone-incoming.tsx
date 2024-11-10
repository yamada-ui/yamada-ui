import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { PhoneIncoming as OriginalPhoneIncoming } from "lucide-react"

/**
 * `PhoneIncomingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PhoneIncomingIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalPhoneIncoming} {...props} />
))

/**
 * `PhoneIncoming` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `PhoneIncomingIcon` instead.
 */
export const PhoneIncoming = PhoneIncomingIcon
