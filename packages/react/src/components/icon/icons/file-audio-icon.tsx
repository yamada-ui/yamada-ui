import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FileAudio } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileAudioIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileAudioIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FileAudio} className={cx("ui-lucide-icon", className)} {...rest} />
)
