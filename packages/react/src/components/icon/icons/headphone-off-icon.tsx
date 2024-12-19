import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { HeadphoneOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `HeadphoneOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HeadphoneOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={HeadphoneOff}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
