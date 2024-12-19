import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FileDown } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileDownIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FileDown} className={cx("ui-lucide-icon", className)} {...rest} />
)
