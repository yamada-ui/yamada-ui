import { forwardRef } from "@yamada-ui/core"
import { Flower2 as Flower2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Flower2Props = LucideIconProps

/**
 * `Flower2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Flower2 = forwardRef<Flower2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Flower2Icon} {...props} />
))
