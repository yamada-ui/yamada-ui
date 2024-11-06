import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FolderSearch2 as LucideFolderSearch2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FolderSearch2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderSearch2Icon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFolderSearch2Icon} {...props} />
  ),
)

/**
 * @deprecated Use `FolderSearch2Icon` instead.
 */
export const FolderSearch2 = FolderSearch2Icon
