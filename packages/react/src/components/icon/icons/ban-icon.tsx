import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Ban } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BanIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BanIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Ban} className={cx("ui-lucide-icon", className)} {...rest} />
)
