import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Atom } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AtomIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AtomIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Atom} className={cx("ui-lucide-icon", className)} {...rest} />
)
