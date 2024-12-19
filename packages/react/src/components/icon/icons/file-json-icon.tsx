import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FileJson } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileJsonIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileJsonIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FileJson} className={cx("ui-lucide-icon", className)} {...rest} />
)
