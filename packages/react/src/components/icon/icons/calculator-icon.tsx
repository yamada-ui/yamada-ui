import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Calculator } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CalculatorIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalculatorIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Calculator} className={cx("ui-lucide-icon", className)} {...rest} />
)
