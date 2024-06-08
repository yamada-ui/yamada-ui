import { forwardRef } from "@yamada-ui/core"
import { FolderPen as FolderPenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FolderPenProps = LucideIconProps

/**
 * `FolderPen` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderPen = forwardRef<FolderPenProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FolderPenIcon} {...props} />
))
