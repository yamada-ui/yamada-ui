import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PersonStanding } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PersonStandingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PersonStandingIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={PersonStanding}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
