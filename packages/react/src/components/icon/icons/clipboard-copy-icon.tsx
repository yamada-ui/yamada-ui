import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ClipboardCopy } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ClipboardCopyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClipboardCopyIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ClipboardCopy}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
