import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PocketKnife } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PocketKnifeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PocketKnifeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={PocketKnife}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
