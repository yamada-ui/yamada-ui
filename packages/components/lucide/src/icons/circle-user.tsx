import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CircleUser as LucideCircleUserIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CircleUserIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleUserIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideCircleUserIcon} {...props} />,
)

/**
 * @deprecated Use `CircleUserIcon` instead.
 */
export const CircleUser = CircleUserIcon
