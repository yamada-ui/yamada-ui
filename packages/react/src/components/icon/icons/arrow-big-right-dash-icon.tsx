import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowBigRightDash } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArrowBigRightDashIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowBigRightDashIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={ArrowBigRightDash}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
