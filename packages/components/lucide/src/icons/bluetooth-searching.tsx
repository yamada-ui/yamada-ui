import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BluetoothSearching as LucideBluetoothSearchingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BluetoothSearchingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BluetoothSearchingIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideBluetoothSearchingIcon} {...props} />
  ),
)

/**
 * @deprecated Use `BluetoothSearchingIcon` instead.
 */
export const BluetoothSearching = BluetoothSearchingIcon
