import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TowerControl as LucideTowerControlIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TowerControlIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TowerControlIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideTowerControlIcon} {...props} />
  ),
)

/**
 * @deprecated Use `TowerControlIcon` instead.
 */
export const TowerControl = TowerControlIcon
