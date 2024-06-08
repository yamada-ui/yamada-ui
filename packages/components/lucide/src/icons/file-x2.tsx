import { forwardRef } from "@yamada-ui/core"
import { FileX2 as FileX2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileX2Props = LucideIconProps

/**
 * `FileX2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileX2 = forwardRef<FileX2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileX2Icon} {...props} />
))
