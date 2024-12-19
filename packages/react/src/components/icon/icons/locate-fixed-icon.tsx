import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { LocateFixed } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LocateFixedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LocateFixedIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={LocateFixed}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
