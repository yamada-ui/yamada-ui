import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CornerUpLeft } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CornerUpLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CornerUpLeftIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CornerUpLeft}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
