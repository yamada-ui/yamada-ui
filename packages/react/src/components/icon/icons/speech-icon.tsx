import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Speech } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SpeechIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SpeechIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Speech} className={cx("ui-lucide-icon", className)} {...rest} />
)
