import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ChevronsLeftRight } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ChevronsLeftRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronsLeftRightIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={ChevronsLeftRight}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
