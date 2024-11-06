import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BadgeCent as LucideBadgeCentIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BadgeCentIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeCentIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideBadgeCentIcon} {...props} />,
)

/**
 * @deprecated Use `BadgeCentIcon` instead.
 */
export const BadgeCent = BadgeCentIcon
