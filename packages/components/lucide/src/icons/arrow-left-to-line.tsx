import { forwardRef } from "@yamada-ui/core"
import { ArrowLeftToLine as ArrowLeftToLineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArrowLeftToLineProps = LucideIconProps

/**
 * `ArrowLeftToLine` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowLeftToLine = forwardRef<ArrowLeftToLineProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ArrowLeftToLineIcon} {...props} />,
)
