import { forwardRef } from "@yamada-ui/core"
import { FileSearch as FileSearchIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileSearchProps = LucideIconProps

/**
 * `FileSearch` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileSearch = forwardRef<FileSearchProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileSearchIcon} {...props} />
))
