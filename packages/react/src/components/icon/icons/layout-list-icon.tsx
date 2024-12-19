import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { LayoutList } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LayoutListIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LayoutListIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={LayoutList} className={cx("ui-lucide-icon", className)} {...rest} />
)
