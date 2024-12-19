import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PhilippinePeso } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PhilippinePesoIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PhilippinePesoIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={PhilippinePeso}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
