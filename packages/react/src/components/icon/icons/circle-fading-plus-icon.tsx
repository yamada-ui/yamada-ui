import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CircleFadingPlus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CircleFadingPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleFadingPlusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CircleFadingPlus}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
