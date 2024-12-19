import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ListRestart } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ListRestartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListRestartIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ListRestart}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
