import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Pentagon as LucidePentagonIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PentagonIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PentagonIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucidePentagonIcon} {...props} />
))

/**
 * @deprecated Use `PentagonIcon` instead.
 */
export const Pentagon = PentagonIcon
