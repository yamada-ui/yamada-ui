import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Locate } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LocateIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LocateIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Locate} className={cx("ui-lucide-icon", className)} {...rest} />
)
