import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Folders as LucideFoldersIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FoldersIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FoldersIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideFoldersIcon} {...props} />
))

/**
 * @deprecated Use `FoldersIcon` instead.
 */
export const Folders = FoldersIcon
