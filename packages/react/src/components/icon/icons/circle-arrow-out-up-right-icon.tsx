import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CircleArrowOutUpRight } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CircleArrowOutUpRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleArrowOutUpRightIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={CircleArrowOutUpRight}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
