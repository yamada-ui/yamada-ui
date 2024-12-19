import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Unplug } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `UnplugIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UnplugIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Unplug} className={cx("ui-lucide-icon", className)} {...rest} />
)
