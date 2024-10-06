import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PillBottle as PillBottleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PillBottle` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PillBottle = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PillBottleIcon} {...props} />
))
