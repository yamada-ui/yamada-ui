import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MoonStar } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MoonStarIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoonStarIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={MoonStar} className={cx("ui-lucide-icon", className)} {...rest} />
)
