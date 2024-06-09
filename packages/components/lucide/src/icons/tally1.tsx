import { forwardRef } from "@yamada-ui/core"
import { Tally1 as Tally1Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Tally1Props = LucideIconProps

/**
 * `Tally1` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Tally1 = forwardRef<Tally1Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Tally1Icon} {...props} />
))
