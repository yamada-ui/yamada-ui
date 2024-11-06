import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChevronFirst as LucideChevronFirstIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChevronFirstIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronFirstIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideChevronFirstIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ChevronFirstIcon` instead.
 */
export const ChevronFirst = ChevronFirstIcon
