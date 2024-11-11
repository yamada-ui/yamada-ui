import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { FlipHorizontal2 as OriginalFlipHorizontal2 } from "lucide-react"

/**
 * `FlipHorizontal2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlipHorizontal2Icon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalFlipHorizontal2} {...props} />,
)

/**
 * `FlipHorizontal2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `FlipHorizontal2Icon` instead.
 */
export const FlipHorizontal2 = FlipHorizontal2Icon
