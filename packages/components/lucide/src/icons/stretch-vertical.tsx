import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { StretchVertical as OriginalStretchVertical } from "lucide-react"

/**
 * `StretchVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const StretchVerticalIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalStretchVertical} {...props} />,
)

/**
 * `StretchVertical` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `StretchVerticalIcon` instead.
 */
export const StretchVertical = StretchVerticalIcon
