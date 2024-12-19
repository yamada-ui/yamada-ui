import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Flower } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FlowerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlowerIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Flower} className={cx("ui-lucide-icon", className)} {...rest} />
)
