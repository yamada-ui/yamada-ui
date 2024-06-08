import { forwardRef } from "@yamada-ui/core"
import { ArrowsUpFromLine as ArrowsUpFromLineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArrowsUpFromLineProps = LucideIconProps

/**
 * `ArrowsUpFromLine` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowsUpFromLine = forwardRef<ArrowsUpFromLineProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ArrowsUpFromLineIcon} {...props} />,
)
