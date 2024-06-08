import { forwardRef } from "@yamada-ui/core"
import { QrCode as QrCodeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type QrCodeProps = LucideIconProps

/**
 * `QrCode` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const QrCode = forwardRef<QrCodeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={QrCodeIcon} {...props} />
))
