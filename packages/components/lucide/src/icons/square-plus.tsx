import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquarePlus as LucideSquarePlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquarePlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquarePlusIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideSquarePlusIcon} {...props} />,
)

/**
 * @deprecated Use `SquarePlusIcon` instead.
 */
export const SquarePlus = SquarePlusIcon
