import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TriangleRight as TriangleRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TriangleRight` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TriangleRight = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={TriangleRightIcon} {...props} />,
)
