import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ArrowRightToLine as ArrowRightToLineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ArrowRightToLine` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowRightToLine = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ArrowRightToLineIcon} {...props} />,
)
