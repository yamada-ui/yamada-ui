import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FileUser } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileUserIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileUserIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FileUser} className={cx("ui-lucide-icon", className)} {...rest} />
)
