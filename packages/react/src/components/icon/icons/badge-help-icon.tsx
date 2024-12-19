import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BadgeHelp } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BadgeHelpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeHelpIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={BadgeHelp} className={cx("ui-lucide-icon", className)} {...rest} />
)
