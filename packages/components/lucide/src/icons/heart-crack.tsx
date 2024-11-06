import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { HeartCrack as LucideHeartCrackIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HeartCrackIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HeartCrackIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideHeartCrackIcon} {...props} />,
)

/**
 * @deprecated Use `HeartCrackIcon` instead.
 */
export const HeartCrack = HeartCrackIcon
