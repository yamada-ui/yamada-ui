import { forwardRef } from "@yamada-ui/core"
import { FileSearch2 as FileSearch2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileSearch2Props = LucideIconProps

/**
 * `FileSearch2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileSearch2 = forwardRef<FileSearch2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileSearch2Icon} {...props} />
))
