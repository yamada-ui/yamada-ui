import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CircleChevronRight } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CircleChevronRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleChevronRightIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={CircleChevronRight}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
