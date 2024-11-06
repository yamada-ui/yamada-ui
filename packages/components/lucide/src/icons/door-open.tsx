import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { DoorOpen as LucideDoorOpenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `DoorOpenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DoorOpenIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideDoorOpenIcon} {...props} />
))

/**
 * @deprecated Use `DoorOpenIcon` instead.
 */
export const DoorOpen = DoorOpenIcon
