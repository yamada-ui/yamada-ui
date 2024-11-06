import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { QrCode as LucideQrCodeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `QrCodeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const QrCodeIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideQrCodeIcon} {...props} />
))

/**
 * @deprecated Use `QrCodeIcon` instead.
 */
export const QrCode = QrCodeIcon
