import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PartyPopper } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PartyPopperIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PartyPopperIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={PartyPopper}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
