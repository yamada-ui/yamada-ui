import { forwardRef } from "@yamada-ui/core"
import { Heading6 as Heading6Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Heading6Props = LucideIconProps

/**
 * `Heading6` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Heading6 = forwardRef<Heading6Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Heading6Icon} {...props} />
))
