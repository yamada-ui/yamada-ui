import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { StretchVertical as LucideStretchVerticalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `StretchVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const StretchVerticalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideStretchVerticalIcon} {...props} />
  ),
)

/**
 * @deprecated Use `StretchVerticalIcon` instead.
 */
export const StretchVertical = StretchVerticalIcon
