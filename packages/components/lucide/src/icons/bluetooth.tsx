import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Bluetooth as LucideBluetoothIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BluetoothIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BluetoothIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideBluetoothIcon} {...props} />,
)

/**
 * @deprecated Use `BluetoothIcon` instead.
 */
export const Bluetooth = BluetoothIcon
