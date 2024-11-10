import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { TreeDeciduous as OriginalTreeDeciduous } from "lucide-react"

/**
 * `TreeDeciduousIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TreeDeciduousIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalTreeDeciduous} {...props} />
))

/**
 * `TreeDeciduous` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `TreeDeciduousIcon` instead.
 */
export const TreeDeciduous = TreeDeciduousIcon
