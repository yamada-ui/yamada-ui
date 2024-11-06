import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PocketKnife as LucidePocketKnifeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PocketKnifeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PocketKnifeIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucidePocketKnifeIcon} {...props} />
  ),
)

/**
 * @deprecated Use `PocketKnifeIcon` instead.
 */
export const PocketKnife = PocketKnifeIcon
