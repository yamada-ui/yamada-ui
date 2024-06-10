import { forwardRef } from "@yamada-ui/core"
import { CircleEllipsis as CircleEllipsisIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CircleEllipsisProps = LucideIconProps

/**
 * `CircleEllipsis` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleEllipsis = forwardRef<CircleEllipsisProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CircleEllipsisIcon} {...props} />,
)
