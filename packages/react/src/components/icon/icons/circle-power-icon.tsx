import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CirclePower } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CirclePowerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CirclePowerIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CirclePower}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
