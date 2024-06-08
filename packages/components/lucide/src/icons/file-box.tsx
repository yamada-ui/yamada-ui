import { forwardRef } from "@yamada-ui/core"
import { FileBox as FileBoxIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileBoxProps = LucideIconProps

/**
 * `FileBox` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileBox = forwardRef<FileBoxProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileBoxIcon} {...props} />
))
