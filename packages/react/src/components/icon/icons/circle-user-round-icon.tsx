import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CircleUserRound } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CircleUserRoundIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleUserRoundIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CircleUserRound}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
