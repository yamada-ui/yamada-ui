import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SmilePlus as LucideSmilePlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SmilePlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SmilePlusIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideSmilePlusIcon} {...props} />,
)

/**
 * @deprecated Use `SmilePlusIcon` instead.
 */
export const SmilePlus = SmilePlusIcon
