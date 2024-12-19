import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CircleArrowLeft } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CircleArrowLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleArrowLeftIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CircleArrowLeft}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
