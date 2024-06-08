import { forwardRef } from "@yamada-ui/core"
import { FlagTriangleRight as FlagTriangleRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FlagTriangleRightProps = LucideIconProps

/**
 * `FlagTriangleRight` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlagTriangleRight = forwardRef<FlagTriangleRightProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={FlagTriangleRightIcon} {...props} />
  ),
)
