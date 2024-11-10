import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { SquareDashedMousePointer as OriginalSquareDashedMousePointer } from "lucide-react"

/**
 * `SquareDashedMousePointerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareDashedMousePointerIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalSquareDashedMousePointer} {...props} />
  ),
)

/**
 * `SquareDashedMousePointer` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `SquareDashedMousePointerIcon` instead.
 */
export const SquareDashedMousePointer = SquareDashedMousePointerIcon
