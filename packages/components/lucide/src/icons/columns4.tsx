import { forwardRef } from "@yamada-ui/core"
import { Columns4 as Columns4Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Columns4Props = LucideIconProps

/**
 * `Columns4` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Columns4 = forwardRef<Columns4Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Columns4Icon} {...props} />
))
