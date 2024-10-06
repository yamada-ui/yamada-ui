import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { IndentDecrease as IndentDecreaseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `IndentDecrease` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const IndentDecrease = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={IndentDecreaseIcon} {...props} />,
)
