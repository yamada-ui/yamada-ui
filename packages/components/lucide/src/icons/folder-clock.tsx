import { forwardRef } from "@yamada-ui/core"
import { FolderClock as FolderClockIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FolderClockProps = LucideIconProps

/**
 * `FolderClock` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderClock = forwardRef<FolderClockProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FolderClockIcon} {...props} />
))
