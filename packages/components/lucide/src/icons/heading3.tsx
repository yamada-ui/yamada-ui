import { forwardRef } from "@yamada-ui/core"
import { Heading3 as Heading3Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Heading3Props = LucideIconProps

/**
 * `Heading3` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Heading3 = forwardRef<Heading3Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Heading3Icon} {...props} />
))
