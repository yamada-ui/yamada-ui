import { forwardRef } from "@yamada-ui/core"
import { ArrowDownToLine as ArrowDownToLineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArrowDownToLineProps = LucideIconProps

/**
 * `ArrowDownToLine` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowDownToLine = forwardRef<ArrowDownToLineProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ArrowDownToLineIcon} {...props} />,
)
