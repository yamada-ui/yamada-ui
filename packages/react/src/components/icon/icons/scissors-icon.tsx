import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Scissors } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ScissorsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScissorsIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Scissors} className={cx("ui-lucide-icon", className)} {...rest} />
)
