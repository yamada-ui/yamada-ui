import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MousePointer2 as MousePointer2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MousePointer2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MousePointer2 = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={MousePointer2Icon} {...props} />,
)
