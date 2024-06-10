import { forwardRef } from "@yamada-ui/core"
import { Milk as MilkIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MilkProps = LucideIconProps

/**
 * `Milk` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Milk = forwardRef<MilkProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MilkIcon} {...props} />
))
