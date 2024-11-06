import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Usb as LucideUsbIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `UsbIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UsbIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideUsbIcon} {...props} />
))

/**
 * @deprecated Use `UsbIcon` instead.
 */
export const Usb = UsbIcon
