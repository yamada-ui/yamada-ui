import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { RadioTower as RadioTowerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RadioTower` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RadioTower = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={RadioTowerIcon} {...props} />
))
