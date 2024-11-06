import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BadgePlus as LucideBadgePlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BadgePlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgePlusIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideBadgePlusIcon} {...props} />,
)

/**
 * @deprecated Use `BadgePlusIcon` instead.
 */
export const BadgePlus = BadgePlusIcon
