import { forwardRef } from "@yamada-ui/core"
import { Tablet as TabletIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TabletProps = LucideIconProps

/**
 * `Tablet` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Tablet = forwardRef<TabletProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TabletIcon} {...props} />
))
