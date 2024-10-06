import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ScanQrCode as ScanQrCodeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ScanQrCode` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScanQrCode = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ScanQrCodeIcon} {...props} />
))
