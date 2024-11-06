import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Underline as LucideUnderlineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `UnderlineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UnderlineIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideUnderlineIcon} {...props} />,
)

/**
 * @deprecated Use `UnderlineIcon` instead.
 */
export const Underline = UnderlineIcon
