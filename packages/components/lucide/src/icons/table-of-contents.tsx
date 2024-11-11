import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { TableOfContents as OriginalTableOfContents } from "lucide-react"

/**
 * `TableOfContentsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TableOfContentsIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalTableOfContents} {...props} />,
)

/**
 * `TableOfContents` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `TableOfContentsIcon` instead.
 */
export const TableOfContents = TableOfContentsIcon
