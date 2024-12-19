import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { AlignVerticalSpaceBetween } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AlignVerticalSpaceBetweenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignVerticalSpaceBetweenIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={AlignVerticalSpaceBetween}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
