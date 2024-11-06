import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FlipHorizontal2 as LucideFlipHorizontal2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FlipHorizontal2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlipHorizontal2Icon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFlipHorizontal2Icon} {...props} />
  ),
)

/**
 * @deprecated Use `FlipHorizontal2Icon` instead.
 */
export const FlipHorizontal2 = FlipHorizontal2Icon
