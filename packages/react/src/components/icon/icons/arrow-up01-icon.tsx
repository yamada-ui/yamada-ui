import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowUp01 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArrowUp01Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowUp01Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ArrowUp01} className={cx("ui-lucide-icon", className)} {...rest} />
)
