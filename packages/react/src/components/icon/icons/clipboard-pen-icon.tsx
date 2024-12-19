import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ClipboardPen } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ClipboardPenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClipboardPenIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ClipboardPen}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
