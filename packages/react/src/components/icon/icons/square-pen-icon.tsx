import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquarePen } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquarePenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquarePenIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={SquarePen} className={cx("ui-lucide-icon", className)} {...rest} />
)
