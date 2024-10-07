import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BluetoothConnected as BluetoothConnectedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BluetoothConnected` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BluetoothConnected = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={BluetoothConnectedIcon} {...props} />
  ),
)
