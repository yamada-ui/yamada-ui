import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CircleDashed } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CircleDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleDashedIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CircleDashed}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
