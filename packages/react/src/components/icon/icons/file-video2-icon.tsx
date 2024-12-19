import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FileVideo2 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileVideo2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileVideo2Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FileVideo2} className={cx("ui-lucide-icon", className)} {...rest} />
)
