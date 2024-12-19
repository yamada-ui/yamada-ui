import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquarePlay } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquarePlayIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquarePlayIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={SquarePlay} className={cx("ui-lucide-icon", className)} {...rest} />
)
