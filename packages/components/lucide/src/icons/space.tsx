import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Space as LucideSpaceIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SpaceIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SpaceIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSpaceIcon} {...props} />
))

/**
 * @deprecated Use `SpaceIcon` instead.
 */
export const Space = SpaceIcon
