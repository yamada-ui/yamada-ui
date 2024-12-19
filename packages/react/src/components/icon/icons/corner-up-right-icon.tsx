import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CornerUpRight } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CornerUpRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CornerUpRightIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CornerUpRight}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
