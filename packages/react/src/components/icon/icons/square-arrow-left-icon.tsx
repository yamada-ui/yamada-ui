import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowLeft } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareArrowLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareArrowLeftIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={SquareArrowLeft}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
