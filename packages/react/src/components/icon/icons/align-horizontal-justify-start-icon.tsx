import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { AlignHorizontalJustifyStart } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AlignHorizontalJustifyStartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignHorizontalJustifyStartIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={AlignHorizontalJustifyStart}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
