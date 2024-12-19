import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ShieldCheck } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ShieldCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShieldCheckIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ShieldCheck}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
