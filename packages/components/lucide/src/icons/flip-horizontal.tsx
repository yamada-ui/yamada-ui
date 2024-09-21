import { forwardRef } from "@yamada-ui/core"
import { FlipHorizontal as FlipHorizontalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `FlipHorizontal` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlipHorizontal = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={FlipHorizontalIcon} {...props} />,
)
