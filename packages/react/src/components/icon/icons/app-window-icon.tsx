import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { AppWindow } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AppWindowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AppWindowIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={AppWindow} className={cx("ui-lucide-icon", className)} {...rest} />
)
