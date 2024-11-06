import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ScanQrCode as LucideScanQrCodeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ScanQrCodeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScanQrCodeIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideScanQrCodeIcon} {...props} />,
)

/**
 * @deprecated Use `ScanQrCodeIcon` instead.
 */
export const ScanQrCode = ScanQrCodeIcon
