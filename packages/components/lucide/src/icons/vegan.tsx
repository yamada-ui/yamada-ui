import { forwardRef } from "@yamada-ui/core"
import { Vegan as VeganIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type VeganProps = LucideIconProps

/**
 * `Vegan` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Vegan = forwardRef<VeganProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={VeganIcon} {...props} />
))
