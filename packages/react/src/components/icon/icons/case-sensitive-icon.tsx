import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CaseSensitive } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CaseSensitiveIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CaseSensitiveIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CaseSensitive}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
