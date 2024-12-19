import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Variable } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `VariableIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const VariableIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Variable} className={cx("ui-lucide-icon", className)} {...rest} />
)
