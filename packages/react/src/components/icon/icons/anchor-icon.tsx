import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Anchor } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AnchorIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AnchorIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Anchor} className={cx("ui-lucide-icon", className)} {...rest} />
)
