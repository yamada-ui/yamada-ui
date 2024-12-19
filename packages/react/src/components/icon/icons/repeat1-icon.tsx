import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Repeat1 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `Repeat1Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Repeat1Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Repeat1} className={cx("ui-lucide-icon", className)} {...rest} />
)
