import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Braces } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BracesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BracesIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Braces} className={cx("ui-lucide-icon", className)} {...rest} />
)
