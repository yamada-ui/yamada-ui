import { forwardRef } from "@yamada-ui/core"
import { WashingMachine as WashingMachineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type WashingMachineProps = LucideIconProps

/**
 * `WashingMachine` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WashingMachine = forwardRef<WashingMachineProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={WashingMachineIcon} {...props} />,
)
