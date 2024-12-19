import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ClipboardPaste } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ClipboardPasteIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClipboardPasteIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ClipboardPaste}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
