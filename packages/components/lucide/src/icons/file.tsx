import { forwardRef } from "@yamada-ui/core"
import { File as FileIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileProps = LucideIconProps

/**
 * `File` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const File = forwardRef<FileProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileIcon} {...props} />
))
