import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { AudioLines } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AudioLinesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AudioLinesIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={AudioLines} className={cx("ui-lucide-icon", className)} {...rest} />
)
