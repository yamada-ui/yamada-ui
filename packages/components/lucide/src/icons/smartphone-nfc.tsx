import { forwardRef } from "@yamada-ui/core"
import { SmartphoneNfc as SmartphoneNfcIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SmartphoneNfcProps = LucideIconProps

/**
 * `SmartphoneNfc` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SmartphoneNfc = forwardRef<SmartphoneNfcProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={SmartphoneNfcIcon} {...props} />,
)
