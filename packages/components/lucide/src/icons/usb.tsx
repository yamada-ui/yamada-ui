import { forwardRef } from "@yamada-ui/core"
import { Usb as UsbIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type UsbProps = LucideIconProps

/**
 * `Usb` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Usb = forwardRef<UsbProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={UsbIcon} {...props} />
))
