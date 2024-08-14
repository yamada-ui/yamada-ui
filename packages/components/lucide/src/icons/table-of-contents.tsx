import { forwardRef } from "@yamada-ui/core"
import { TableOfContents as TableOfContentsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TableOfContentsProps = LucideIconProps

/**
 * `TableOfContents` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TableOfContents = forwardRef<TableOfContentsProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={TableOfContentsIcon} {...props} />,
)
