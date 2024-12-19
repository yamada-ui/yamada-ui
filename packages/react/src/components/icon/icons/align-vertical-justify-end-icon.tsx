import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { AlignVerticalJustifyEnd } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AlignVerticalJustifyEndIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignVerticalJustifyEndIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={AlignVerticalJustifyEnd}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
