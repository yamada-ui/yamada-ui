import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FileVideo } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileVideoIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileVideoIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FileVideo} className={cx("ui-lucide-icon", className)} {...rest} />
)
