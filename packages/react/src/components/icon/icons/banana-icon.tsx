import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Banana } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BananaIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BananaIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Banana} className={cx("ui-lucide-icon", className)} {...rest} />
)
