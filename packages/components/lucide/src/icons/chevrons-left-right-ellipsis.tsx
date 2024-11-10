import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { ChevronsLeftRightEllipsis as OriginalChevronsLeftRightEllipsis } from "lucide-react"

/**
 * `ChevronsLeftRightEllipsisIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronsLeftRightEllipsisIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalChevronsLeftRightEllipsis} {...props} />
  ),
)

/**
 * `ChevronsLeftRightEllipsis` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ChevronsLeftRightEllipsisIcon` instead.
 */
export const ChevronsLeftRightEllipsis = ChevronsLeftRightEllipsisIcon
