import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { NotebookPen as OriginalNotebookPen } from "lucide-react"

/**
 * `NotebookPenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const NotebookPenIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalNotebookPen}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `NotebookPen` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `NotebookPenIcon` instead.
 */
export const NotebookPen = NotebookPenIcon
