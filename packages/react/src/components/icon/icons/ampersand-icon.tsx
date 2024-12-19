import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Ampersand } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AmpersandIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AmpersandIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Ampersand} className={cx("ui-lucide-icon", className)} {...rest} />
)
