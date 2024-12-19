import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PaintbrushVertical } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PaintbrushVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PaintbrushVerticalIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={PaintbrushVertical}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
