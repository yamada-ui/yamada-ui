import { forwardRef } from "@yamada-ui/core"
import { FileKey as FileKeyIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileKeyProps = LucideIconProps

/**
 * `FileKey` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileKey = forwardRef<FileKeyProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileKeyIcon} {...props} />
))
