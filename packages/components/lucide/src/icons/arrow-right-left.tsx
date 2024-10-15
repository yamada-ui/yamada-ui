import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ArrowRightLeft as ArrowRightLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ArrowRightLeft` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowRightLeft = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ArrowRightLeftIcon} {...props} />,
)
