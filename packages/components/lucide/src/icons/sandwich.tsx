import { forwardRef } from "@yamada-ui/core"
import { Sandwich as SandwichIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SandwichProps = LucideIconProps

/**
 * `Sandwich` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Sandwich = forwardRef<SandwichProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SandwichIcon} {...props} />
))
