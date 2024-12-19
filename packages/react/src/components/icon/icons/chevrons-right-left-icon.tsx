import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ChevronsRightLeft } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ChevronsRightLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronsRightLeftIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={ChevronsRightLeft}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
