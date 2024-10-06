import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { EllipsisVertical as EllipsisVerticalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `EllipsisVertical` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const EllipsisVertical = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={EllipsisVerticalIcon} {...props} />,
)
