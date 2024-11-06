import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BluetoothConnected as LucideBluetoothConnectedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BluetoothConnectedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BluetoothConnectedIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideBluetoothConnectedIcon} {...props} />
  ),
)

/**
 * @deprecated Use `BluetoothConnectedIcon` instead.
 */
export const BluetoothConnected = BluetoothConnectedIcon
