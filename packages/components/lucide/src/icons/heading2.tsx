import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Heading2 as LucideHeading2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Heading2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Heading2Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideHeading2Icon} {...props} />
))

/**
 * @deprecated Use `Heading2Icon` instead.
 */
export const Heading2 = Heading2Icon
