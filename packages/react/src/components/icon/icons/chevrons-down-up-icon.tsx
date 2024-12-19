import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ChevronsDownUp } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ChevronsDownUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronsDownUpIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ChevronsDownUp}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
