import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { UtilityPole } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `UtilityPoleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UtilityPoleIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={UtilityPole}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
