import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FileAudio2 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileAudio2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileAudio2Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FileAudio2} className={cx("ui-lucide-icon", className)} {...rest} />
)
