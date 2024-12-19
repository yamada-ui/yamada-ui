import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowDownFromLine } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArrowDownFromLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowDownFromLineIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={ArrowDownFromLine}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
