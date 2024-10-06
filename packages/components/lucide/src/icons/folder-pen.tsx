import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FolderPen as FolderPenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FolderPen` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderPen = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FolderPenIcon} {...props} />
))
