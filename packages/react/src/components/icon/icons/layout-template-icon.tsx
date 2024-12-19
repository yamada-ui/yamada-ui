import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { LayoutTemplate } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LayoutTemplateIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LayoutTemplateIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={LayoutTemplate}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
