import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { WashingMachine } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `WashingMachineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WashingMachineIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={WashingMachine}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
