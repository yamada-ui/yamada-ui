import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { EyeClosed } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `EyeClosedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const EyeClosedIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={EyeClosed} className={cx("ui-lucide-icon", className)} {...rest} />
)
