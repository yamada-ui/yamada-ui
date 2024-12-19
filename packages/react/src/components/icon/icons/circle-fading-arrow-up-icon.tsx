import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CircleFadingArrowUp } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CircleFadingArrowUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleFadingArrowUpIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={CircleFadingArrowUp}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
