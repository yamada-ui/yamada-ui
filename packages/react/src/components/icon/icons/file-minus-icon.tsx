import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FileMinus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileMinusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FileMinus} className={cx("ui-lucide-icon", className)} {...rest} />
)
