import { forwardRef } from "@yamada-ui/core"
import { AlignCenterVertical as AlignCenterVerticalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AlignCenterVerticalProps = LucideIconProps

/**
 * `AlignCenterVertical` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignCenterVertical = forwardRef<AlignCenterVerticalProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={AlignCenterVerticalIcon} {...props} />
  ),
)
