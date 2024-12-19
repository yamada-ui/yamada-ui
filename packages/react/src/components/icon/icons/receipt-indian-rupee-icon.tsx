import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ReceiptIndianRupee } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ReceiptIndianRupeeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ReceiptIndianRupeeIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={ReceiptIndianRupee}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
