import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Headset } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `HeadsetIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HeadsetIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Headset} className={cx("ui-lucide-icon", className)} {...rest} />
)
