import { forwardRef } from "@yamada-ui/core"
import { EggFried as EggFriedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type EggFriedProps = LucideIconProps

/**
 * `EggFried` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const EggFried = forwardRef<EggFriedProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={EggFriedIcon} {...props} />
))
