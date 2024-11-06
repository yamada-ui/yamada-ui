import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { HardDrive as LucideHardDriveIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HardDriveIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HardDriveIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideHardDriveIcon} {...props} />,
)

/**
 * @deprecated Use `HardDriveIcon` instead.
 */
export const HardDrive = HardDriveIcon
