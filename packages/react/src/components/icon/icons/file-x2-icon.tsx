import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FileX2 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileX2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileX2Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FileX2} className={cx("ui-lucide-icon", className)} {...rest} />
)
