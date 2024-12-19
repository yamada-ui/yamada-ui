import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Clipboard } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ClipboardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClipboardIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Clipboard} className={cx("ui-lucide-icon", className)} {...rest} />
)
