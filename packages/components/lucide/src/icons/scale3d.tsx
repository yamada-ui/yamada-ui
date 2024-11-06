import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Scale3d as LucideScale3dIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Scale3dIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Scale3dIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideScale3dIcon} {...props} />
))

/**
 * @deprecated Use `Scale3dIcon` instead.
 */
export const Scale3d = Scale3dIcon
