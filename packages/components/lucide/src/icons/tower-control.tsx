import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TowerControl as TowerControlIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TowerControl` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TowerControl = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TowerControlIcon} {...props} />
))
