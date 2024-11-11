import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { SmartphoneCharging as OriginalSmartphoneCharging } from "lucide-react"

/**
 * `SmartphoneChargingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SmartphoneChargingIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalSmartphoneCharging} {...props} />,
)

/**
 * `SmartphoneCharging` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `SmartphoneChargingIcon` instead.
 */
export const SmartphoneCharging = SmartphoneChargingIcon
