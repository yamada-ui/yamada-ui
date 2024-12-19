import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Frown } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FrownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FrownIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Frown} className={cx("ui-lucide-icon", className)} {...rest} />
)
