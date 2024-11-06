import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Dock as LucideDockIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `DockIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DockIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideDockIcon} {...props} />
))

/**
 * @deprecated Use `DockIcon` instead.
 */
export const Dock = DockIcon
