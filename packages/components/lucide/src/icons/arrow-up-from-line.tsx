import { forwardRef } from "@yamada-ui/core"
import { ArrowUpFromLine as ArrowUpFromLineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArrowUpFromLineProps = LucideIconProps

/**
 * `ArrowUpFromLine` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowUpFromLine = forwardRef<ArrowUpFromLineProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ArrowUpFromLineIcon} {...props} />,
)
