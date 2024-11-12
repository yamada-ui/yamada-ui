import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { SeparatorVertical as OriginalSeparatorVertical } from "lucide-react"

/**
 * `SeparatorVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SeparatorVerticalIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalSeparatorVertical} {...props} />,
)

/**
 * `SeparatorVertical` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `SeparatorVerticalIcon` instead.
 */
export const SeparatorVertical = SeparatorVerticalIcon
