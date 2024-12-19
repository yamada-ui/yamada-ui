import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Equal } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `EqualIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const EqualIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Equal} className={cx("ui-lucide-icon", className)} {...rest} />
)
