import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Cat } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CatIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CatIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Cat} className={cx("ui-lucide-icon", className)} {...rest} />
)
