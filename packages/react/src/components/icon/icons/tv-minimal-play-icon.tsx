import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { TvMinimalPlay } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TvMinimalPlayIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TvMinimalPlayIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={TvMinimalPlay}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
