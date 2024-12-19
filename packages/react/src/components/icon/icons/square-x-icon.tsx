import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareX } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareXIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={SquareX} className={cx("ui-lucide-icon", className)} {...rest} />
)
