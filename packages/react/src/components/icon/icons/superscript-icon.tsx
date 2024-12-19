import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Superscript } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SuperscriptIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SuperscriptIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={Superscript}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
