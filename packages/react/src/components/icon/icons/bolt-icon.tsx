import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Bolt } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BoltIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BoltIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Bolt} className={cx("ui-lucide-icon", className)} {...rest} />
)
