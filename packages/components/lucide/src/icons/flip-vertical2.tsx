import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FlipVertical2 as LucideFlipVertical2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FlipVertical2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlipVertical2Icon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFlipVertical2Icon} {...props} />
  ),
)

/**
 * @deprecated Use `FlipVertical2Icon` instead.
 */
export const FlipVertical2 = FlipVertical2Icon
