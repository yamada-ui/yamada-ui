import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Lasso } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LassoIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LassoIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Lasso} className={cx("ui-lucide-icon", className)} {...rest} />
)
