import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Gem } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `GemIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GemIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Gem} className={cx("ui-lucide-icon", className)} {...rest} />
)
