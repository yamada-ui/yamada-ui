import { forwardRef } from "@yamada-ui/core"
import { Columns2 as Columns2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Columns2Props = LucideIconProps

/**
 * `Columns2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Columns2 = forwardRef<Columns2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Columns2Icon} {...props} />
))
