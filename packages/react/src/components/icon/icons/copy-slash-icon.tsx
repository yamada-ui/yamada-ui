import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CopySlash } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CopySlashIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CopySlashIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={CopySlash} className={cx("ui-lucide-icon", className)} {...rest} />
)
