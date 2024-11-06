import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { KeySquare as LucideKeySquareIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `KeySquareIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const KeySquareIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideKeySquareIcon} {...props} />,
)

/**
 * @deprecated Use `KeySquareIcon` instead.
 */
export const KeySquare = KeySquareIcon
