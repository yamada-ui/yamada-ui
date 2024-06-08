import { forwardRef } from "@yamada-ui/core"
import { FileJson as FileJsonIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileJsonProps = LucideIconProps

/**
 * `FileJson` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileJson = forwardRef<FileJsonProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileJsonIcon} {...props} />
))
