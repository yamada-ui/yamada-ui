import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FileStack } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileStackIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileStackIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FileStack} className={cx("ui-lucide-icon", className)} {...rest} />
)
