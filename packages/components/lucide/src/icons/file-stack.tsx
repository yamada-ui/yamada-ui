import { forwardRef } from "@yamada-ui/core"
import { FileStack as FileStackIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileStackProps = LucideIconProps

/**
 * `FileStack` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileStack = forwardRef<FileStackProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileStackIcon} {...props} />
))
