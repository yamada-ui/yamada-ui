import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Columns3 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `Columns3Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Columns3Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Columns3} className={cx("ui-lucide-icon", className)} {...rest} />
)
