import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Underline } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `UnderlineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UnderlineIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Underline} className={cx("ui-lucide-icon", className)} {...rest} />
)
