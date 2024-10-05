import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { DoorClosed as DoorClosedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `DoorClosed` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DoorClosed = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={DoorClosedIcon} {...props} />
))
