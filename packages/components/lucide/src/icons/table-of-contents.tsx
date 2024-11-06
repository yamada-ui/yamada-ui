import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TableOfContents as LucideTableOfContentsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TableOfContentsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TableOfContentsIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideTableOfContentsIcon} {...props} />
  ),
)

/**
 * @deprecated Use `TableOfContentsIcon` instead.
 */
export const TableOfContents = TableOfContentsIcon
