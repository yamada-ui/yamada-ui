import { forwardRef } from "@yamada-ui/core"
import { BluetoothSearching as BluetoothSearchingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BluetoothSearchingProps = LucideIconProps

/**
 * `BluetoothSearching` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BluetoothSearching = forwardRef<BluetoothSearchingProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={BluetoothSearchingIcon} {...props} />
  ),
)
