import { forwardRef } from "@yamada-ui/core"
import { FileCode as FileCodeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileCodeProps = LucideIconProps

/**
 * `FileCode` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileCode = forwardRef<FileCodeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileCodeIcon} {...props} />
))
