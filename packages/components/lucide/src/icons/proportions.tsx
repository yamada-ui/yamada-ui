import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Proportions as LucideProportionsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ProportionsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ProportionsIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideProportionsIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ProportionsIcon` instead.
 */
export const Proportions = ProportionsIcon
