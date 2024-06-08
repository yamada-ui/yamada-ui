import { forwardRef } from "@yamada-ui/core"
import { QrCode as QrCodeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type QrCodeProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const QrCode = forwardRef<QrCodeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={QrCodeIcon} {...props} />
))
