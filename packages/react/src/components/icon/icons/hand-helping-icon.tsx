import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { HandHelping } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `HandHelpingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HandHelpingIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={HandHelping}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
