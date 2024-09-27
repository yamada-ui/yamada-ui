import { forwardRef } from "@yamada-ui/core"
import { SlidersVertical as SlidersVerticalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `SlidersVertical` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SlidersVertical = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={SlidersVerticalIcon} {...props} />,
)
