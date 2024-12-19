import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Tv } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TvIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TvIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Tv} className={cx("ui-lucide-icon", className)} {...rest} />
)
