import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SeparatorVertical as SeparatorVerticalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SeparatorVertical` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SeparatorVertical = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={SeparatorVerticalIcon} {...props} />
  ),
)
