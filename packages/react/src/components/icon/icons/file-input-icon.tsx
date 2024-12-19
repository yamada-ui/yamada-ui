import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FileInput } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileInputIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileInputIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FileInput} className={cx("ui-lucide-icon", className)} {...rest} />
)
