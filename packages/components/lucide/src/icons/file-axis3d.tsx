import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileAxis3d as FileAxis3dIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileAxis3d` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileAxis3d = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileAxis3dIcon} {...props} />
))
