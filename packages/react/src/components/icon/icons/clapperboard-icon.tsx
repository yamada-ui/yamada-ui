import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Clapperboard } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ClapperboardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClapperboardIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={Clapperboard}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
