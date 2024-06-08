import { forwardRef } from "@yamada-ui/core"
import { FolderSearch2 as FolderSearch2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FolderSearch2Props = LucideIconProps

/**
 * `FolderSearch2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderSearch2 = forwardRef<FolderSearch2Props, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={FolderSearch2Icon} {...props} />,
)
