import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CircleChevronLeft as CircleChevronLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CircleChevronLeft` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleChevronLeft = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={CircleChevronLeftIcon} {...props} />
  ),
)
