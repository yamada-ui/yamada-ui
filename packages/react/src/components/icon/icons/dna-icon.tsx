import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Dna } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `DnaIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DnaIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Dna} className={cx("ui-lucide-icon", className)} {...rest} />
)
