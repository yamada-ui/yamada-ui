import { forwardRef } from "@yamada-ui/core"
import { Ruler as RulerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type RulerProps = LucideIconProps

/**
 * `Ruler` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Ruler = forwardRef<RulerProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={RulerIcon} {...props} />
))
