import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CirclePlus as LucideCirclePlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CirclePlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CirclePlusIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideCirclePlusIcon} {...props} />,
)

/**
 * @deprecated Use `CirclePlusIcon` instead.
 */
export const CirclePlus = CirclePlusIcon
