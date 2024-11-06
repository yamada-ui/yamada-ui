import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { HandPlatter as LucideHandPlatterIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HandPlatterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HandPlatterIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideHandPlatterIcon} {...props} />
  ),
)

/**
 * @deprecated Use `HandPlatterIcon` instead.
 */
export const HandPlatter = HandPlatterIcon
