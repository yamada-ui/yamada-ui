import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Grid2x2Check } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `Grid2x2CheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Grid2x2CheckIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={Grid2x2Check}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
