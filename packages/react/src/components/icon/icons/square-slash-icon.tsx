import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareSlash } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareSlashIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareSlashIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={SquareSlash}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
