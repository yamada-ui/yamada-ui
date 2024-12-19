import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { LampCeiling } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LampCeilingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LampCeilingIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={LampCeiling}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
