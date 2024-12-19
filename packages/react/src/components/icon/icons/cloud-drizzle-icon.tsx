import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CloudDrizzle } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CloudDrizzleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudDrizzleIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CloudDrizzle}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
