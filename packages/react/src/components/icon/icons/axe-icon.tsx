import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Axe } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AxeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AxeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Axe} className={cx("ui-lucide-icon", className)} {...rest} />
)
