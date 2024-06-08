import { forwardRef } from "@yamada-ui/core"
import { FileAxis3d as FileAxis3dIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileAxis3dProps = LucideIconProps

/**
 * `FileAxis3d` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileAxis3d = forwardRef<FileAxis3dProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileAxis3dIcon} {...props} />
))
