import { forwardRef } from "@yamada-ui/core"
import { FileDown as FileDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileDownProps = LucideIconProps

/**
 * `FileDown` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileDown = forwardRef<FileDownProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileDownIcon} {...props} />
))
