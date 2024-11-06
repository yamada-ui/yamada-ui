import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CircleSlash2 as LucideCircleSlash2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CircleSlash2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleSlash2Icon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCircleSlash2Icon} {...props} />
  ),
)

/**
 * @deprecated Use `CircleSlash2Icon` instead.
 */
export const CircleSlash2 = CircleSlash2Icon
