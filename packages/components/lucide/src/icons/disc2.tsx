import { forwardRef } from "@yamada-ui/core"
import { Disc2 as Disc2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Disc2Props = LucideIconProps

/**
 * `Disc2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Disc2 = forwardRef<Disc2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Disc2Icon} {...props} />
))
