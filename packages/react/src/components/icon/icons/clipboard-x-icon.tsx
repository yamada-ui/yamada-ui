import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ClipboardX } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ClipboardXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClipboardXIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ClipboardX} className={cx("ui-lucide-icon", className)} {...rest} />
)
