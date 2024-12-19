import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { LayoutGrid } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LayoutGridIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LayoutGridIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={LayoutGrid} className={cx("ui-lucide-icon", className)} {...rest} />
)
