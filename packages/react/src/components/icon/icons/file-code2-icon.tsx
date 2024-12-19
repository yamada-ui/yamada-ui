import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FileCode2 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileCode2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileCode2Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FileCode2} className={cx("ui-lucide-icon", className)} {...rest} />
)
