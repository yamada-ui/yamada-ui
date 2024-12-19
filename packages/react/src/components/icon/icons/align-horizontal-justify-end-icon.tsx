import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { AlignHorizontalJustifyEnd } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AlignHorizontalJustifyEndIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignHorizontalJustifyEndIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={AlignHorizontalJustifyEnd}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
