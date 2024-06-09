import { forwardRef } from "@yamada-ui/core"
import { MousePointerClick as MousePointerClickIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MousePointerClickProps = LucideIconProps

/**
 * `MousePointerClick` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MousePointerClick = forwardRef<MousePointerClickProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={MousePointerClickIcon} {...props} />
  ),
)
