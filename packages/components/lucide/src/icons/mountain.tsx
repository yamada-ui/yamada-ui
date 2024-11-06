import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Mountain as LucideMountainIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MountainIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MountainIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideMountainIcon} {...props} />
))

/**
 * @deprecated Use `MountainIcon` instead.
 */
export const Mountain = MountainIcon
