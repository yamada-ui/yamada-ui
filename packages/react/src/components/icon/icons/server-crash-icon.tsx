import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ServerCrash } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ServerCrashIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ServerCrashIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ServerCrash}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
