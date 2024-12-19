import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { AlignHorizontalSpaceBetween } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AlignHorizontalSpaceBetweenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignHorizontalSpaceBetweenIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={AlignHorizontalSpaceBetween}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
