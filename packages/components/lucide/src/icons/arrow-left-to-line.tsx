import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ArrowLeftToLine as ArrowLeftToLineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ArrowLeftToLine` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowLeftToLine = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ArrowLeftToLineIcon} {...props} />,
)
