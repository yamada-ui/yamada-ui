import { forwardRef } from "@yamada-ui/core"
import { SeparatorHorizontal as SeparatorHorizontalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SeparatorHorizontalProps = LucideIconProps

/**
 * `SeparatorHorizontal` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SeparatorHorizontal = forwardRef<SeparatorHorizontalProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={SeparatorHorizontalIcon} {...props} />
  ),
)
