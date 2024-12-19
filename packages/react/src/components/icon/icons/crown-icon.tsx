import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Crown } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CrownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CrownIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Crown} className={cx("ui-lucide-icon", className)} {...rest} />
)
