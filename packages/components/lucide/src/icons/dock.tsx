import { forwardRef } from "@yamada-ui/core"
import { Dock as DockIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type DockProps = LucideIconProps

/**
 * `Dock` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Dock = forwardRef<DockProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={DockIcon} {...props} />
))
