import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BluetoothOff as LucideBluetoothOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BluetoothOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BluetoothOffIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideBluetoothOffIcon} {...props} />
  ),
)

/**
 * @deprecated Use `BluetoothOffIcon` instead.
 */
export const BluetoothOff = BluetoothOffIcon
