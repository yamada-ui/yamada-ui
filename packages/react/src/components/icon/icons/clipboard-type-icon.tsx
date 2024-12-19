import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ClipboardType } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ClipboardTypeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClipboardTypeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ClipboardType}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
