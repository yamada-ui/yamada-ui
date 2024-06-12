import { forwardRef } from "@yamada-ui/core"
import { ArrowUpToLine as ArrowUpToLineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArrowUpToLineProps = LucideIconProps

/**
 * `ArrowUpToLine` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowUpToLine = forwardRef<ArrowUpToLineProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ArrowUpToLineIcon} {...props} />,
)
