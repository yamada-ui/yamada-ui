import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquarePi } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquarePiIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquarePiIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={SquarePi} className={cx("ui-lucide-icon", className)} {...rest} />
)
