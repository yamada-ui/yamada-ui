import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { UnfoldVertical as OriginalUnfoldVertical } from "lucide-react"

/**
 * `UnfoldVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UnfoldVerticalIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalUnfoldVertical} {...props} />
))

/**
 * `UnfoldVertical` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `UnfoldVerticalIcon` instead.
 */
export const UnfoldVertical = UnfoldVerticalIcon
