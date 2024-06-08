import { forwardRef } from "@yamada-ui/core"
import { HardDrive as HardDriveIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type HardDriveProps = LucideIconProps

/**
 * `HardDrive` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HardDrive = forwardRef<HardDriveProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={HardDriveIcon} {...props} />
))
