import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Cog } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CogIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Cog} className={cx("ui-lucide-icon", className)} {...rest} />
)
