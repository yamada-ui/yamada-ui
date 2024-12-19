import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CirclePause } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CirclePauseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CirclePauseIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CirclePause}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
