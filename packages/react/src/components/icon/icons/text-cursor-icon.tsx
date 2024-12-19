import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { TextCursor } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TextCursorIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TextCursorIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={TextCursor} className={cx("ui-lucide-icon", className)} {...rest} />
)
