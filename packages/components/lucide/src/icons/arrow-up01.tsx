import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ArrowUp01 as LucideArrowUp01Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ArrowUp01Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowUp01Icon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideArrowUp01Icon} {...props} />,
)

/**
 * @deprecated Use `ArrowUp01Icon` instead.
 */
export const ArrowUp01 = ArrowUp01Icon
