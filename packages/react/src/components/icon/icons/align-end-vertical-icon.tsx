import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { AlignEndVertical } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AlignEndVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignEndVerticalIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={AlignEndVertical}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
