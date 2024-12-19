import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FileJson2 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileJson2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileJson2Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FileJson2} className={cx("ui-lucide-icon", className)} {...rest} />
)
