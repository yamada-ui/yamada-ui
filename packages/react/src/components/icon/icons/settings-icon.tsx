import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Settings } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SettingsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SettingsIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Settings} className={cx("ui-lucide-icon", className)} {...rest} />
)
