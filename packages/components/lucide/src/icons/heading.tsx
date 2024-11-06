import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Heading as LucideHeadingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HeadingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HeadingIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideHeadingIcon} {...props} />
))

/**
 * @deprecated Use `HeadingIcon` instead.
 */
export const Heading = HeadingIcon
