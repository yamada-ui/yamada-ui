import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CircleEllipsis as CircleEllipsisIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CircleEllipsis` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleEllipsis = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CircleEllipsisIcon} {...props} />,
)
