import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Heading6 as LucideHeading6Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Heading6Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Heading6Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideHeading6Icon} {...props} />
))

/**
 * @deprecated Use `Heading6Icon` instead.
 */
export const Heading6 = Heading6Icon
