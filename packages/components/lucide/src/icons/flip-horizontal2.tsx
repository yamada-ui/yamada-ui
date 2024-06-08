import { forwardRef } from "@yamada-ui/core"
import { FlipHorizontal2 as FlipHorizontal2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FlipHorizontal2Props = LucideIconProps

/**
 * `FlipHorizontal2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlipHorizontal2 = forwardRef<FlipHorizontal2Props, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={FlipHorizontal2Icon} {...props} />,
)
