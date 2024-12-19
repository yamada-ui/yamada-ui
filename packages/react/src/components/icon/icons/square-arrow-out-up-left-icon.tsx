import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowOutUpLeft } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareArrowOutUpLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareArrowOutUpLeftIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={SquareArrowOutUpLeft}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
