import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FileDigit } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileDigitIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileDigitIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FileDigit} className={cx("ui-lucide-icon", className)} {...rest} />
)
