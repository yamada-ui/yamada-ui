import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BrainCircuit } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BrainCircuitIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BrainCircuitIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={BrainCircuit}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
