import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Speaker } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SpeakerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SpeakerIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Speaker} className={cx("ui-lucide-icon", className)} {...rest} />
)
