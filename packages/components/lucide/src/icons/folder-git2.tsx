import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FolderGit2 as FolderGit2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FolderGit2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderGit2 = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FolderGit2Icon} {...props} />
))
