import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CircleChevronLeft } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CircleChevronLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleChevronLeftIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={CircleChevronLeft}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
