import { forwardRef } from "@yamada-ui/core"
import { Scale3d as Scale3dIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Scale3dProps = LucideIconProps

/**
 * `Scale3d` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Scale3d = forwardRef<Scale3dProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Scale3dIcon} {...props} />
))
