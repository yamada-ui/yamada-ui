import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CircleUser } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CircleUserIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleUserIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={CircleUser} className={cx("ui-lucide-icon", className)} {...rest} />
)
