import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BaggageClaim } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BaggageClaimIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BaggageClaimIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={BaggageClaim}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
