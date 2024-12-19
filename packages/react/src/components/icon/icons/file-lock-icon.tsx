import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FileLock } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileLockIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileLockIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FileLock} className={cx("ui-lucide-icon", className)} {...rest} />
)
