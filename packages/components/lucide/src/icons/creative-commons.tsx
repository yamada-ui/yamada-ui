import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CreativeCommons as LucideCreativeCommonsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CreativeCommonsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CreativeCommonsIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCreativeCommonsIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CreativeCommonsIcon` instead.
 */
export const CreativeCommons = CreativeCommonsIcon
