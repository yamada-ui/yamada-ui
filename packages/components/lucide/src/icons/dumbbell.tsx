import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Dumbbell as LucideDumbbellIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `DumbbellIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DumbbellIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideDumbbellIcon} {...props} />
))

/**
 * @deprecated Use `DumbbellIcon` instead.
 */
export const Dumbbell = DumbbellIcon
