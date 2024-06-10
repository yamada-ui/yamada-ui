import { forwardRef } from "@yamada-ui/core"
import { FolderClosed as FolderClosedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FolderClosedProps = LucideIconProps

/**
 * `FolderClosed` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderClosed = forwardRef<FolderClosedProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={FolderClosedIcon} {...props} />,
)
