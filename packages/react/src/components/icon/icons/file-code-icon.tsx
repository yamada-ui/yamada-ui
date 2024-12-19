import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FileCode } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileCodeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileCodeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FileCode} className={cx("ui-lucide-icon", className)} {...rest} />
)
