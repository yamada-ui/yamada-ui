import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ChevronsUp } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ChevronsUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronsUpIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ChevronsUp} className={cx("ui-lucide-icon", className)} {...rest} />
)
