import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ClipboardCheck } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ClipboardCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClipboardCheckIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ClipboardCheck}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
