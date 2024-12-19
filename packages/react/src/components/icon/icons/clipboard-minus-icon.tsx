import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ClipboardMinus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ClipboardMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClipboardMinusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ClipboardMinus}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
