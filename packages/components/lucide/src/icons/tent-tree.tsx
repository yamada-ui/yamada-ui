import { forwardRef } from "@yamada-ui/core"
import { TentTree as TentTreeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TentTreeProps = LucideIconProps

/**
 * `TentTree` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TentTree = forwardRef<TentTreeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TentTreeIcon} {...props} />
))
