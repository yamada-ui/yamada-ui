import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FileX } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileXIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FileX} className={cx("ui-lucide-icon", className)} {...rest} />
)
