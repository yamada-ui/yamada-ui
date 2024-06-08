import { forwardRef } from "@yamada-ui/core"
import { SlidersVertical as SlidersVerticalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SlidersVerticalProps = LucideIconProps

/**
 * `SlidersVertical` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SlidersVertical = forwardRef<SlidersVerticalProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={SlidersVerticalIcon} {...props} />,
)
