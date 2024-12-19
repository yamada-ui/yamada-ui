import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Logs } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LogsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LogsIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Logs} className={cx("ui-lucide-icon", className)} {...rest} />
)
