import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FolderOutput as FolderOutputIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FolderOutput` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderOutput = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FolderOutputIcon} {...props} />
))
