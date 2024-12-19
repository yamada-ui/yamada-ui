import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { IterationCw } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `IterationCwIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const IterationCwIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={IterationCw}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
