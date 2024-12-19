import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Cross } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CrossIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CrossIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Cross} className={cx("ui-lucide-icon", className)} {...rest} />
)
