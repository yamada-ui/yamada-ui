import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowRightFromLine } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArrowRightFromLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowRightFromLineIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={ArrowRightFromLine}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
