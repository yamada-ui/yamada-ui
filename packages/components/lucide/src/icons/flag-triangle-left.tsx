import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { FlagTriangleLeft as OriginalFlagTriangleLeft } from "lucide-react"

/**
 * `FlagTriangleLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlagTriangleLeftIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalFlagTriangleLeft} {...props} />,
)

/**
 * `FlagTriangleLeft` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `FlagTriangleLeftIcon` instead.
 */
export const FlagTriangleLeft = FlagTriangleLeftIcon
