import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CircleSlash } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CircleSlashIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleSlashIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CircleSlash}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
