import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Tally5 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `Tally5Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Tally5Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Tally5} className={cx("ui-lucide-icon", className)} {...rest} />
)
