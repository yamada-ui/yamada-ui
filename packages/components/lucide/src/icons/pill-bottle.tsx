import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PillBottle as LucidePillBottleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PillBottleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PillBottleIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucidePillBottleIcon} {...props} />,
)

/**
 * @deprecated Use `PillBottleIcon` instead.
 */
export const PillBottle = PillBottleIcon
