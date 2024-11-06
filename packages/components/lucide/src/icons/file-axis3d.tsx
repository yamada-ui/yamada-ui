import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileAxis3d as LucideFileAxis3dIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileAxis3dIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileAxis3dIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFileAxis3dIcon} {...props} />,
)

/**
 * @deprecated Use `FileAxis3dIcon` instead.
 */
export const FileAxis3d = FileAxis3dIcon
