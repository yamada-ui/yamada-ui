import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ArrowUp10 as LucideArrowUp10Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ArrowUp10Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowUp10Icon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideArrowUp10Icon} {...props} />,
)

/**
 * @deprecated Use `ArrowUp10Icon` instead.
 */
export const ArrowUp10 = ArrowUp10Icon
