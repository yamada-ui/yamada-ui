import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FileUp } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileUpIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FileUp} className={cx("ui-lucide-icon", className)} {...rest} />
)
