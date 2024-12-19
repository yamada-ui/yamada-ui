import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { AlignEndHorizontal } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AlignEndHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignEndHorizontalIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={AlignEndHorizontal}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
