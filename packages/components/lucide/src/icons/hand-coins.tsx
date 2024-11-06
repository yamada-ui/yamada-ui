import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { HandCoins as LucideHandCoinsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HandCoinsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HandCoinsIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideHandCoinsIcon} {...props} />,
)

/**
 * @deprecated Use `HandCoinsIcon` instead.
 */
export const HandCoins = HandCoinsIcon
