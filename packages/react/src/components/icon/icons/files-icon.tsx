import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Files } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FilesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FilesIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Files} className={cx("ui-lucide-icon", className)} {...rest} />
)
