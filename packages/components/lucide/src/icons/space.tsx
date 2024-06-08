import { forwardRef } from "@yamada-ui/core"
import { Space as SpaceIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SpaceProps = LucideIconProps

/**
 * `Space` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Space = forwardRef<SpaceProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SpaceIcon} {...props} />
))
