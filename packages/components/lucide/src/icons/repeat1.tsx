import { forwardRef } from "@yamada-ui/core"
import { Repeat1 as Repeat1Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Repeat1Props = LucideIconProps

/**
 * `Repeat1` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Repeat1 = forwardRef<Repeat1Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Repeat1Icon} {...props} />
))
