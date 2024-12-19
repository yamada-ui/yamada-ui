import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FlaskConical } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FlaskConicalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlaskConicalIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={FlaskConical}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
