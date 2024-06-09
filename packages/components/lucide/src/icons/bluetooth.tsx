import { forwardRef } from "@yamada-ui/core"
import { Bluetooth as BluetoothIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BluetoothProps = LucideIconProps

/**
 * `Bluetooth` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Bluetooth = forwardRef<BluetoothProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BluetoothIcon} {...props} />
))
