import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { KeyRound } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `KeyRoundIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const KeyRoundIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={KeyRound} className={cx("ui-lucide-icon", className)} {...rest} />
)
