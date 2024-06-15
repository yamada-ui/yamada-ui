import { forwardRef } from "@yamada-ui/core"
import { Heading4 as Heading4Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Heading4Props = LucideIconProps

/**
 * `Heading4` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Heading4 = forwardRef<Heading4Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Heading4Icon} {...props} />
))
