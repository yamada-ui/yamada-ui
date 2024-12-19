import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Shirt } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ShirtIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShirtIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Shirt} className={cx("ui-lucide-icon", className)} {...rest} />
)
