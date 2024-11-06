import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Tablet as LucideTabletIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TabletIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TabletIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideTabletIcon} {...props} />
))

/**
 * @deprecated Use `TabletIcon` instead.
 */
export const Tablet = TabletIcon
