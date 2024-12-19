import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FileType2 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileType2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileType2Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FileType2} className={cx("ui-lucide-icon", className)} {...rest} />
)
