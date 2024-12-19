import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowUpZA } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArrowUpZAIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowUpZAIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ArrowUpZA} className={cx("ui-lucide-icon", className)} {...rest} />
)
