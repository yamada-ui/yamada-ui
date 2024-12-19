import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CaseUpper } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CaseUpperIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CaseUpperIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={CaseUpper} className={cx("ui-lucide-icon", className)} {...rest} />
)
