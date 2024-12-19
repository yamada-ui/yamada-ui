import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Baby } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BabyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BabyIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Baby} className={cx("ui-lucide-icon", className)} {...rest} />
)
