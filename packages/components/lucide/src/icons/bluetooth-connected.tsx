import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { BluetoothConnected as OriginalBluetoothConnected } from "lucide-react"

/**
 * `BluetoothConnectedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BluetoothConnectedIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalBluetoothConnected} {...props} />,
)

/**
 * `BluetoothConnected` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `BluetoothConnectedIcon` instead.
 */
export const BluetoothConnected = BluetoothConnectedIcon
