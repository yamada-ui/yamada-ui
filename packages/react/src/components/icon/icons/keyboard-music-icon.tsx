import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { KeyboardMusic } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `KeyboardMusicIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const KeyboardMusicIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={KeyboardMusic}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
