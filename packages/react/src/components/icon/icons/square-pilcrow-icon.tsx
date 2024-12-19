import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquarePilcrow } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquarePilcrowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquarePilcrowIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={SquarePilcrow}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
