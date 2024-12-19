import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { AudioWaveform } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AudioWaveformIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AudioWaveformIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={AudioWaveform}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
