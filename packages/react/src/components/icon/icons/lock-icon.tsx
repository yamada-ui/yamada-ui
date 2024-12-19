import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Lock } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LockIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LockIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Lock} className={cx("ui-lucide-icon", className)} {...rest} />
)
