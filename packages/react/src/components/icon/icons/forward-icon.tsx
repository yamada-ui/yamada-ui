import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Forward } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ForwardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ForwardIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Forward} className={cx("ui-lucide-icon", className)} {...rest} />
)
