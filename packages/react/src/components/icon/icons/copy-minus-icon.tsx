import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CopyMinus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CopyMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CopyMinusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={CopyMinus} className={cx("ui-lucide-icon", className)} {...rest} />
)
