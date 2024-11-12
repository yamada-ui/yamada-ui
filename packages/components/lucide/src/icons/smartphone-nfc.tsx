import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { SmartphoneNfc as OriginalSmartphoneNfc } from "lucide-react"

/**
 * `SmartphoneNfcIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SmartphoneNfcIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalSmartphoneNfc} {...props} />
))

/**
 * `SmartphoneNfc` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `SmartphoneNfcIcon` instead.
 */
export const SmartphoneNfc = SmartphoneNfcIcon
