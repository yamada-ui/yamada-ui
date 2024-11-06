import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ScrollText as LucideScrollTextIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ScrollTextIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScrollTextIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideScrollTextIcon} {...props} />,
)

/**
 * @deprecated Use `ScrollTextIcon` instead.
 */
export const ScrollText = ScrollTextIcon
