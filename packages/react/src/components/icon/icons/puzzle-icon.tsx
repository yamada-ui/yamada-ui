import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Puzzle } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PuzzleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PuzzleIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Puzzle} className={cx("ui-lucide-icon", className)} {...rest} />
)
