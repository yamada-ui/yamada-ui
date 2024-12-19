import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { TreeDeciduous } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TreeDeciduousIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TreeDeciduousIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={TreeDeciduous}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
