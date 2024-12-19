import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CaseLower } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CaseLowerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CaseLowerIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={CaseLower} className={cx("ui-lucide-icon", className)} {...rest} />
)
