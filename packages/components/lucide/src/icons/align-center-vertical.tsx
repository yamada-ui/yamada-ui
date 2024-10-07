import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlignCenterVertical as AlignCenterVerticalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlignCenterVertical` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignCenterVertical = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={AlignCenterVerticalIcon} {...props} />
  ),
)
