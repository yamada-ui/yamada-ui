import { forwardRef } from "@yamada-ui/core"
import { DoorOpen as DoorOpenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type DoorOpenProps = LucideIconProps

/**
 * `DoorOpen` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DoorOpen = forwardRef<DoorOpenProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={DoorOpenIcon} {...props} />
))
