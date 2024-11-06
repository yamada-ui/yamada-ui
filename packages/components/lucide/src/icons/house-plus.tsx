import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { HousePlus as LucideHousePlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HousePlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HousePlusIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideHousePlusIcon} {...props} />,
)

/**
 * @deprecated Use `HousePlusIcon` instead.
 */
export const HousePlus = HousePlusIcon
