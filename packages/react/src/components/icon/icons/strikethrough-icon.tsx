import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Strikethrough } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `StrikethroughIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const StrikethroughIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={Strikethrough}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
