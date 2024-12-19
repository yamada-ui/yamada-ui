import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Ham } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `HamIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HamIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Ham} className={cx("ui-lucide-icon", className)} {...rest} />
)
