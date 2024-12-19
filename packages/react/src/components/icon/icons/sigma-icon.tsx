import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Sigma } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SigmaIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SigmaIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Sigma} className={cx("ui-lucide-icon", className)} {...rest} />
)
