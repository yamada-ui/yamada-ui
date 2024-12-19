import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Italic } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ItalicIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ItalicIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Italic} className={cx("ui-lucide-icon", className)} {...rest} />
)
