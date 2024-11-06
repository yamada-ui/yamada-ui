import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Heading3 as LucideHeading3Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Heading3Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Heading3Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideHeading3Icon} {...props} />
))

/**
 * @deprecated Use `Heading3Icon` instead.
 */
export const Heading3 = Heading3Icon
