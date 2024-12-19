import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ListMinus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ListMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListMinusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ListMinus} className={cx("ui-lucide-icon", className)} {...rest} />
)
