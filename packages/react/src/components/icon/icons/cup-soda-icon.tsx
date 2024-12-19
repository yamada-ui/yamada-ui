import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CupSoda } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CupSodaIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CupSodaIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={CupSoda} className={cx("ui-lucide-icon", className)} {...rest} />
)
