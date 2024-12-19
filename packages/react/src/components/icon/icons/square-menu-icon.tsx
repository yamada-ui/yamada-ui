import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareMenu } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareMenuIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareMenuIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={SquareMenu} className={cx("ui-lucide-icon", className)} {...rest} />
)
