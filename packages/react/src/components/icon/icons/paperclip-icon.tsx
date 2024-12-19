import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Paperclip } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PaperclipIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PaperclipIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Paperclip} className={cx("ui-lucide-icon", className)} {...rest} />
)
