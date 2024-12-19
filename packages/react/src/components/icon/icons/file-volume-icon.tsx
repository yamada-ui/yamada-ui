import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FileVolume } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileVolumeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileVolumeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FileVolume} className={cx("ui-lucide-icon", className)} {...rest} />
)
