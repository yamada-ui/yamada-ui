import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CodeXml } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CodeXmlIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CodeXmlIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={CodeXml} className={cx("ui-lucide-icon", className)} {...rest} />
)
