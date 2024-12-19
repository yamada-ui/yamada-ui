import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BadgeEuro } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BadgeEuroIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeEuroIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={BadgeEuro} className={cx("ui-lucide-icon", className)} {...rest} />
)
