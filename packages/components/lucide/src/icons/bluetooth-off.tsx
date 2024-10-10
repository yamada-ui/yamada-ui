import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BluetoothOff as BluetoothOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BluetoothOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BluetoothOff = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BluetoothOffIcon} {...props} />
))
