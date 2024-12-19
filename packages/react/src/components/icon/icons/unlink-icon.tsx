import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Unlink } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `UnlinkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UnlinkIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Unlink} className={cx("ui-lucide-icon", className)} {...rest} />
)
