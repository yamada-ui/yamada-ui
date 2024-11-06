import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Heading5 as LucideHeading5Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Heading5Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Heading5Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideHeading5Icon} {...props} />
))

/**
 * @deprecated Use `Heading5Icon` instead.
 */
export const Heading5 = Heading5Icon
