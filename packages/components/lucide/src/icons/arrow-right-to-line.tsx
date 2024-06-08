import { forwardRef } from "@yamada-ui/core"
import { ArrowRightToLine as ArrowRightToLineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArrowRightToLineProps = LucideIconProps

/**
 * `ArrowRightToLine` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowRightToLine = forwardRef<ArrowRightToLineProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ArrowRightToLineIcon} {...props} />,
)
