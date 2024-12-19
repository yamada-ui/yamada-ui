import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ChevronsRight } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ChevronsRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronsRightIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ChevronsRight}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
