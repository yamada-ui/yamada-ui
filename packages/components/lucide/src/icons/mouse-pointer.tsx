import { forwardRef } from "@yamada-ui/core"
import { MousePointer as MousePointerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MousePointerProps = LucideIconProps

/**
 * `MousePointer` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MousePointer = forwardRef<MousePointerProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={MousePointerIcon} {...props} />,
)
