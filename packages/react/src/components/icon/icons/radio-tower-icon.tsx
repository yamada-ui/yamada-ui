import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { RadioTower } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `RadioTowerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RadioTowerIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={RadioTower} className={cx("ui-lucide-icon", className)} {...rest} />
)
