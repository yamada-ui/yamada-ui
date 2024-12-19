import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SwissFranc } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SwissFrancIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SwissFrancIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={SwissFranc} className={cx("ui-lucide-icon", className)} {...rest} />
)
