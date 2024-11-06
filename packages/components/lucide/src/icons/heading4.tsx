import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Heading4 as LucideHeading4Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Heading4Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Heading4Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideHeading4Icon} {...props} />
))

/**
 * @deprecated Use `Heading4Icon` instead.
 */
export const Heading4 = Heading4Icon
