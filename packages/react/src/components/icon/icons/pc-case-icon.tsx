import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PcCase } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PcCaseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PcCaseIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={PcCase} className={cx("ui-lucide-icon", className)} {...rest} />
)
