import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ReceiptJapaneseYen } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ReceiptJapaneseYenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ReceiptJapaneseYenIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={ReceiptJapaneseYen}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
