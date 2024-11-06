import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Heading1 as LucideHeading1Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Heading1Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Heading1Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideHeading1Icon} {...props} />
))

/**
 * @deprecated Use `Heading1Icon` instead.
 */
export const Heading1 = Heading1Icon
