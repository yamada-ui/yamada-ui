import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CloudLightning } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CloudLightningIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudLightningIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CloudLightning}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
