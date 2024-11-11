import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { PhoneForwarded as OriginalPhoneForwarded } from "lucide-react"

/**
 * `PhoneForwardedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PhoneForwardedIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalPhoneForwarded} {...props} />
))

/**
 * `PhoneForwarded` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `PhoneForwardedIcon` instead.
 */
export const PhoneForwarded = PhoneForwardedIcon
