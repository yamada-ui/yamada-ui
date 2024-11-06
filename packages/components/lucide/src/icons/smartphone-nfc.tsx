import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SmartphoneNfc as LucideSmartphoneNfcIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SmartphoneNfcIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SmartphoneNfcIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSmartphoneNfcIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SmartphoneNfcIcon` instead.
 */
export const SmartphoneNfc = SmartphoneNfcIcon
