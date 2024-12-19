import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Tally4 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `Tally4Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Tally4Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Tally4} className={cx("ui-lucide-icon", className)} {...rest} />
)
