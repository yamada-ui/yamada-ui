import { forwardRef } from "@yamada-ui/core"
import { FileCheck as FileCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileCheckProps = LucideIconProps

/**
 * `FileCheck` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileCheck = forwardRef<FileCheckProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileCheckIcon} {...props} />
))
