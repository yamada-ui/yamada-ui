import { forwardRef } from "@yamada-ui/core"
import { ArrowDownFromLine as ArrowDownFromLineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArrowDownFromLineProps = LucideIconProps

/**
 * `ArrowDownFromLine` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowDownFromLine = forwardRef<ArrowDownFromLineProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={ArrowDownFromLineIcon} {...props} />
  ),
)
