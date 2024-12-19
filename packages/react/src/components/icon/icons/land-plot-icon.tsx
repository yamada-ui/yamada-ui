import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { LandPlot } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LandPlotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LandPlotIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={LandPlot} className={cx("ui-lucide-icon", className)} {...rest} />
)
