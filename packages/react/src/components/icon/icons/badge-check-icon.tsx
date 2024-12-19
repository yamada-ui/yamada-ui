import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BadgeCheck } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BadgeCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeCheckIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={BadgeCheck} className={cx("ui-lucide-icon", className)} {...rest} />
)
