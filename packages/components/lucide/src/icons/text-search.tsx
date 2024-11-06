import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TextSearch as LucideTextSearchIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TextSearchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TextSearchIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideTextSearchIcon} {...props} />,
)

/**
 * @deprecated Use `TextSearchIcon` instead.
 */
export const TextSearch = TextSearchIcon
