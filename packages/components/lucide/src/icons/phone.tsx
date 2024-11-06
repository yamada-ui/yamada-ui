import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Phone as LucidePhoneIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PhoneIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PhoneIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucidePhoneIcon} {...props} />
))

/**
 * @deprecated Use `PhoneIcon` instead.
 */
export const Phone = PhoneIcon
