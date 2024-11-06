import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { RadioTower as LucideRadioTowerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RadioTowerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RadioTowerIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideRadioTowerIcon} {...props} />,
)

/**
 * @deprecated Use `RadioTowerIcon` instead.
 */
export const RadioTower = RadioTowerIcon
