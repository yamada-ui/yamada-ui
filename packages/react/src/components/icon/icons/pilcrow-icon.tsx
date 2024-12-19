import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Pilcrow } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PilcrowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PilcrowIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Pilcrow} className={cx("ui-lucide-icon", className)} {...rest} />
)
