import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PhoneOff as LucidePhoneOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PhoneOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PhoneOffIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucidePhoneOffIcon} {...props} />
))

/**
 * @deprecated Use `PhoneOffIcon` instead.
 */
export const PhoneOff = PhoneOffIcon
