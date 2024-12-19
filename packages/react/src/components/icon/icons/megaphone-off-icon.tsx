import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MegaphoneOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MegaphoneOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MegaphoneOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={MegaphoneOff}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
