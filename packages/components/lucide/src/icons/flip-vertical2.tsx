import { forwardRef } from "@yamada-ui/core"
import { FlipVertical2 as FlipVertical2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FlipVertical2Props = LucideIconProps

/**
 * `FlipVertical2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlipVertical2 = forwardRef<FlipVertical2Props, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={FlipVertical2Icon} {...props} />,
)
