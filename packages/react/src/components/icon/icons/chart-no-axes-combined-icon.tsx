import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ChartNoAxesCombined } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ChartNoAxesCombinedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartNoAxesCombinedIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={ChartNoAxesCombined}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
