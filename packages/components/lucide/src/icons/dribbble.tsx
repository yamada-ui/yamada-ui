import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Dribbble as LucideDribbbleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `DribbbleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DribbbleIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideDribbbleIcon} {...props} />
))

/**
 * @deprecated Use `DribbbleIcon` instead.
 */
export const Dribbble = DribbbleIcon
