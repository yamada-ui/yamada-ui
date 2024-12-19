import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Tally1 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `Tally1Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Tally1Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Tally1} className={cx("ui-lucide-icon", className)} {...rest} />
)
