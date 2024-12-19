import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { AlignCenterVertical } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AlignCenterVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignCenterVerticalIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={AlignCenterVertical}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
