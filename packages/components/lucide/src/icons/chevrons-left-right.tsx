import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { ChevronsLeftRight as OriginalChevronsLeftRight } from "lucide-react"

/**
 * `ChevronsLeftRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronsLeftRightIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalChevronsLeftRight} {...props} />,
)

/**
 * `ChevronsLeftRight` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ChevronsLeftRightIcon` instead.
 */
export const ChevronsLeftRight = ChevronsLeftRightIcon
