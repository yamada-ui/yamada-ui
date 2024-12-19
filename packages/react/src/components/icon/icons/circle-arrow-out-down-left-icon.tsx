import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CircleArrowOutDownLeft } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CircleArrowOutDownLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleArrowOutDownLeftIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={CircleArrowOutDownLeft}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
