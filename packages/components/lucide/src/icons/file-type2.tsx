import { forwardRef } from "@yamada-ui/core"
import { FileType2 as FileType2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileType2Props = LucideIconProps

/**
 * `FileType2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileType2 = forwardRef<FileType2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileType2Icon} {...props} />
))
