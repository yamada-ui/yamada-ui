import { forwardRef } from "@yamada-ui/core"
import { Tally2 as Tally2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Tally2Props = LucideIconProps

/**
 * `Tally2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Tally2 = forwardRef<Tally2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Tally2Icon} {...props} />
))
