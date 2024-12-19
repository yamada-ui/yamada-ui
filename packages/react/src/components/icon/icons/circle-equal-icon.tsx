import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CircleEqual } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CircleEqualIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleEqualIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CircleEqual}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
