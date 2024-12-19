import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PanelBottomDashed } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PanelBottomDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelBottomDashedIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={PanelBottomDashed}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
