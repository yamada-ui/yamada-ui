import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Navigation2 as Navigation2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Navigation2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Navigation2 = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Navigation2Icon} {...props} />
))
