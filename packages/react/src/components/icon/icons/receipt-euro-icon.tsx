import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ReceiptEuro } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ReceiptEuroIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ReceiptEuroIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ReceiptEuro}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
