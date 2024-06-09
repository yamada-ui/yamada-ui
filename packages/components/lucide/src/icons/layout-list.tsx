import { forwardRef } from "@yamada-ui/core"
import { LayoutList as LayoutListIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LayoutListProps = LucideIconProps

/**
 * `LayoutList` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LayoutList = forwardRef<LayoutListProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LayoutListIcon} {...props} />
))
