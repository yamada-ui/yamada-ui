import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Carrot } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CarrotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CarrotIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Carrot} className={cx("ui-lucide-icon", className)} {...rest} />
)
