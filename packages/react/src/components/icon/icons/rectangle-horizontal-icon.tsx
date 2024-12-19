import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { RectangleHorizontal } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `RectangleHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RectangleHorizontalIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={RectangleHorizontal}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
