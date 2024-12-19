import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { IterationCcw } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `IterationCcwIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const IterationCcwIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={IterationCcw}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
