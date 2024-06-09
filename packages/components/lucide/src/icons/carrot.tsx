import { forwardRef } from "@yamada-ui/core"
import { Carrot as CarrotIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CarrotProps = LucideIconProps

/**
 * `Carrot` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Carrot = forwardRef<CarrotProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CarrotIcon} {...props} />
))
