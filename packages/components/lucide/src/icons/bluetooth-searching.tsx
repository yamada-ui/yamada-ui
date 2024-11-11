import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { BluetoothSearching as OriginalBluetoothSearching } from "lucide-react"

/**
 * `BluetoothSearchingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BluetoothSearchingIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalBluetoothSearching} {...props} />,
)

/**
 * `BluetoothSearching` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `BluetoothSearchingIcon` instead.
 */
export const BluetoothSearching = BluetoothSearchingIcon
