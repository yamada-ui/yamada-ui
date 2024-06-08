import { forwardRef } from "@yamada-ui/core"
import { Heading2 as Heading2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Heading2Props = LucideIconProps

/**
 * `Heading2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Heading2 = forwardRef<Heading2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Heading2Icon} {...props} />
))
