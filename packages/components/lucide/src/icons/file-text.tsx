import { forwardRef } from "@yamada-ui/core"
import { FileText as FileTextIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileTextProps = LucideIconProps

/**
 * `FileText` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileText = forwardRef<FileTextProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileTextIcon} {...props} />
))
