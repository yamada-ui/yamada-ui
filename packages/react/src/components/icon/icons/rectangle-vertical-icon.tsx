import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { RectangleVertical } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `RectangleVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RectangleVerticalIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={RectangleVertical}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
