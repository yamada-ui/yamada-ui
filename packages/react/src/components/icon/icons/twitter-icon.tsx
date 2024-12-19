import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Twitter } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TwitterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TwitterIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Twitter} className={cx("ui-lucide-icon", className)} {...rest} />
)
