import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Navigation2 as LucideNavigation2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Navigation2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Navigation2Icon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideNavigation2Icon} {...props} />
  ),
)

/**
 * @deprecated Use `Navigation2Icon` instead.
 */
export const Navigation2 = Navigation2Icon
