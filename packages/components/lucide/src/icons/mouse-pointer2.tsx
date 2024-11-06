import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MousePointer2 as LucideMousePointer2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MousePointer2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MousePointer2Icon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideMousePointer2Icon} {...props} />
  ),
)

/**
 * @deprecated Use `MousePointer2Icon` instead.
 */
export const MousePointer2 = MousePointer2Icon
