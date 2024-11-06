import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TramFront as LucideTramFrontIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TramFrontIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TramFrontIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideTramFrontIcon} {...props} />,
)

/**
 * @deprecated Use `TramFrontIcon` instead.
 */
export const TramFront = TramFrontIcon
